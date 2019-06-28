import get from 'lodash/get';
import map from 'lodash/map';
import { OPENRC_VERSION } from './download-openrc/download-openrc.constants';

export default class PciProjectsProjectUsersService {
  /* @ngInject */
  constructor(
    $q,
    OvhApiCloudProject,
    OvhApiCloudProjectRegion,
    OvhApiCloudProjectUser,
  ) {
    this.$q = $q;
    this.OvhApiCloudProject = OvhApiCloudProject;
    this.OvhApiCloudProjectRegion = OvhApiCloudProjectRegion;
    this.OvhApiCloudProjectUser = OvhApiCloudProjectUser;
  }

  getAll(projectId) {
    this.OvhApiCloudProjectUser.v6().resetQueryCache();
    return this.OvhApiCloudProjectUser
      .v6()
      .query({
        serviceName: projectId,
      })
      .$promise;
  }

  get(projectId, userId) {
    return this.OvhApiCloudProjectUser
      .v6()
      .get({
        serviceName: projectId,
        userId,
      })
      .$promise;
  }

  add(projectId, { description }) {
    return this.OvhApiCloudProjectUser
      .v6()
      .save(
        {
          serviceName: projectId,
        },
        {
          description,
        },
      )
      .$promise;
  }

  delete(projectId, { id: userId }) {
    return this.OvhApiCloudProjectUser
      .v6()
      .delete({
        serviceName: projectId,
        userId,
      })
      .$promise;
  }

  regeneratePassword(projectId, { id: userId }) {
    return this.OvhApiCloudProjectUser
      .v6()
      .password({
        serviceName: projectId,
        userId,
      })
      .$promise;
  }

  getRegions(projectId) {
    return this.OvhApiCloudProjectRegion
      .v6()
      .query({
        serviceName: projectId,
      })
      .$promise;
  }

  downloadOpenRc(projectId, { id: userId }, region, version) {
    return this.OvhApiCloudProjectUser
      .v6()
      .openrc(
        {
          serviceName: projectId,
          userId,
          region,
          version: get(OPENRC_VERSION, `V${version}`),
        },
      )
      .$promise;
  }

  downloadRclone(projectId, { id: userId }, region) {
    return this.OvhApiCloudProjectUser
      .v6()
      .rclone(
        {
          serviceName: projectId,
          userId,
          region,
        },
      )
      .$promise;
  }

  generateToken(projectId, { id: userId, password }) {
    return this.OvhApiCloudProjectUser
      .v6()
      .token(
        {
          serviceName: projectId,
          userId,
        },
        {
          password,
        },
      )
      .$promise;
  }

  getProjectRoles(projectId) {
    return this.OvhApiCloudProject
      .v6()
      .role({
        serviceName: projectId,
      })
      .$promise
      .then((response) => {
        const roles = map(response.roles, ({ description: name, id }) => ({ id, name }));

        const buildRoles = permissionRoles => map(roles, role => ({
          ...role,
          active: [...permissionRoles || []].includes(role.id),
        }));

        const services = map(response.services, ({ name, permissions }) => ({
          name,
          permissions: permissions.map(({ label, roles: permissionRoles }) => ({
            name: label,
            roles: buildRoles(permissionRoles),
          })),
        }));

        return {
          roles,
          services,
        };
      });
  }
}
