import angular from 'angular';
import has from 'lodash/has';
import map from 'lodash/map';
import pickBy from 'lodash/pickBy';
import reduce from 'lodash/reduce';
import startsWith from 'lodash/startsWith';
import endsWith from 'lodash/endsWith';

import Container from './container.class';
import ContainerObject from './container-object.class';

import {
  CONTAINER_DEFAULT_PASSWORD_TENANTNAME,
  CONTAINER_DEFAULT_PASSWORD_USERNAME,
  CONTAINER_DEFAULT_PASSWORD,
  OBJECT_CONTAINER_TYPE_STATIC,
  OBJECT_CONTAINER_TYPE_PUBLIC,
  OBJECT_TYPE_SEALED,
  X_AUTH_TOKEN,
  X_CONTAINER_HEADERS_REGEX,
  X_CONTAINER_READ,
  X_CONTAINER_READ_PUBLIC_VALUE,
} from './containers.constants';

export default class PciStoragesContainersService {
  /* @ngInject */
  constructor(
    $http,
    $q,
    OvhApiCloudProjectStorage,
    OvhApiCloudProjectUser,
  ) {
    this.$http = $http;
    this.$q = $q;
    this.OvhApiCloudProjectStorage = OvhApiCloudProjectStorage;
    this.OvhApiCloudProjectUser = OvhApiCloudProjectUser;
  }

  getAccessAndToken(projectId) {
    return this.OvhApiCloudProjectStorage
      .v6()
      .access({
        projectId,
      })
      .$promise
      .then(({ token, endpoints }) => ({
        token,
        endpoints: reduce(
          endpoints,
          (result, endpoint) => ({
            ...result,
            [endpoint.region.toLowerCase()]: endpoint.url,
          }),
          {},
        ),
      }));
  }

  getArchivePassword(projectId, { region }) {
    return this.OvhApiCloudProjectUser
      .v6()
      .query({
        serviceName: projectId,
      })
      .$promise
      .then((users) => {
        const promises = {
          users,
        };
        if (users.length > 0) {
          promises.openrc = this.OvhApiCloudProjectUser
            .Aapi()
            .openrc({
              serviceName: projectId,
              userId: users[0].id,
              region,
            })
            .$promise;
        }
        return this.$q.all(promises);
      })
      .then(({ users, openrc }) => {
        if (openrc) {
          let cleanedOpenRc = { ...openrc };
          if (users.length > 1) {
            cleanedOpenRc = Object.keys(openrc).reduce((object, key) => {
              if (key !== 'osUsername') {
                return {
                  ...object,
                  [key]: openrc[key],
                };
              }
              return object;
            }, {});
          }
          return cleanedOpenRc;
        }
        return {};
      })
      .then((connectionInformation) => {
        let password = `${CONTAINER_DEFAULT_PASSWORD}`;
        if (has(connectionInformation, 'osTenantName')) {
          password = password.replace(
            CONTAINER_DEFAULT_PASSWORD_TENANTNAME,
            connectionInformation.osTenantName,
          );
        }
        if (has(connectionInformation, 'osUsername')) {
          password = password.replace(
            CONTAINER_DEFAULT_PASSWORD_USERNAME,
            connectionInformation.osUsername,
          );
        }

        return password;
      });
  }

  getAll(projectId, isArchive = null, withObjects = false) {
    const queryParams = {
      serviceName: projectId,
      withObjects,
    };

    if (isArchive === true) {
      queryParams.archive = true;
    } else if (isArchive === false) {
      queryParams.archive = false;
    }

    return this.OvhApiCloudProjectStorage
      .Aapi()
      .query(queryParams)
      .$promise
      .then(containers => map(containers, container => new Container(container)));
  }

  getContainer(projectId, containerId) {
    return this.OvhApiCloudProjectStorage
      .v6()
      .get({
        projectId,
        containerId,
      })
      .$promise
      .then(container => this.$q.all({
        container,
        publicUrl: this.getContainerUrl(projectId, container),
      }))
      .then(({ container, publicUrl }) => new Container({
        ...container,
        objects: map(container.objects, object => new ContainerObject(object)),
        id: containerId,
        publicUrl,
      }));
  }

  getContainerUrl(projectId, container, file = null) {
    return this.getAccessAndToken(projectId)
      .then(({ endpoints }) => {
        const url = `${endpoints[container.region.toLowerCase()]}/${encodeURIComponent(container.name)}`;
        if (file) {
          return `${url}/${encodeURIComponent(file)}`;
        }
        return url;
      });
  }

  requestContainer(projectId, container, optsParam = {}) {
    const opts = pickBy(optsParam, (value, key) => key !== 'file');
    return this.getAccessAndToken(projectId)
      .then(accessToken => this.$q.all({
        accessToken,
        url: this.getContainerUrl(projectId, container, optsParam.file),
      }))
      .then(({ accessToken, url }) => this.$http(angular.merge({
        method: 'GET',
        url,
        headers: {
          [X_AUTH_TOKEN]: accessToken.token,
        },
      }, opts)));
  }

  getContainerMetaData(projectId, container) {
    return this.requestContainer(projectId, container, { method: 'HEAD' })
      .then(metadata => pickBy(
        metadata.headers(),
        (value, key) => X_CONTAINER_HEADERS_REGEX.test(key),
      ));
  }

  addContainer(projectId, {
    archive,
    containerType,
    name,
    region,
  }) {
    return this.OvhApiCloudProjectStorage
      .v6()
      .save(
        {
          projectId,
        },
        {
          archive,
          containerName: name,
          region: region.name,
        },
      )
      .$promise
      .then((container) => {
        let returnPromise = this.$q.resolve();
        if (containerType === OBJECT_CONTAINER_TYPE_STATIC) {
          returnPromise = this.setContainerAsStatic(projectId, container);
        } else if (containerType === OBJECT_CONTAINER_TYPE_PUBLIC) {
          returnPromise = this.setContainerAsPublic(projectId, container);
        }
        return returnPromise;
      });
  }

  setContainerAsStatic(projectId, container) {
    return this.OvhApiCloudProjectStorage
      .v6()
      .static({
        projectId,
        containerId: container.id,
      }, {})
      .$promise;
  }

  setContainerAsPublic(projectId, container) {
    return this.getContainerMetaData(projectId, container)
      .then((metadata) => {
        if (metadata[X_CONTAINER_READ] !== X_CONTAINER_READ_PUBLIC_VALUE) {
          return this.requestContainer(projectId, container, {
            method: 'PUT',
            headers: {
              [X_CONTAINER_READ]: X_CONTAINER_READ_PUBLIC_VALUE,
            },
          });
        }
        return $.resolve();
      });
  }

  deleteContainer(projectId, container) {
    const promises = reduce(container.objects, (result, object) => [
      ...result,
      this.deleteObject(projectId, container, object),
    ], []);

    return this.$q.all(promises)
      .then(() => this.OvhApiCloudProjectStorage
        .v6()
        .delete({
          projectId,
          containerId: container.id,
        })
        .$promise);
  }

  static getFilePath(filePrefix, file) {
    let prefix = '';
    if (filePrefix) {
      prefix = filePrefix;
      if (startsWith(filePrefix, '/')) {
        prefix = prefix.substring(1);
      }
      if (!endsWith(filePrefix, '/')) {
        prefix = `${prefix}/`;
      }
    }
    return `${prefix}${file.name}`;
  }

  addObjects(projectId, container, filePrefix, files) {
    return this.$q.all(map(
      files,
      file => this.addObject(projectId, container, filePrefix, file),
    ));
  }

  addObject(projectId, container, filePrefix, file) {
    const config = {
      headers: {
        'Content-Type': file.type,
      },
      data: file,
    };

    return this.$q.all({
      url: this.getContainerUrl(
        projectId,
        container,
        PciStoragesContainersService.getFilePath(filePrefix, file),
      ),
      accessToken: this.getAccessAndToken(projectId),
    })
      .then(({ accessToken, url }) => this.upload(url, config, accessToken));
  }


  upload(url, config, accessToken) {
    return this.$http.put(
      url,
      config.data,
      {
        headers: {
          ...config.headers,
          [X_AUTH_TOKEN]: accessToken.token,
        },
      },
    );
  }

  deleteObject(projectId, container, object) {
    return this.requestContainer(projectId, container, {
      method: 'DELETE',
      file: object.name,
    });
  }

  getObjectUrl(projectId, containerId, object) {
    const expirationDate = moment().add(1, 'week').toISOString();
    return this.OvhApiCloudProjectStorage
      .v6()
      .getURL({
        projectId,
        containerId,
      }, {
        expirationDate,
        objectName: object.name,
      }).$promise
      .then(resp => resp.getURL);
  }

  downloadObject(projectId, containerId, object) {
    return this.getObjectUrl(projectId, containerId, object);
  }

  unsealObject(projectId, container, object) {
    if (object.retrievalState === OBJECT_TYPE_SEALED) {
      return this.getObjectUrl(projectId, container.id, object)
        .then(url => this.$http.get(url))
        .catch((error) => {
          // This call make a CORS error, but still initiate the process,
          // swallow status -1 which is what we get when cors fail.
          if (error.status !== -1) {
            throw error;
          }
        });
    }

    return this.$q.resolve();
  }
}
