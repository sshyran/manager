import get from 'lodash/get';
import keys from 'lodash/keys';
import pickBy from 'lodash/pickBy';
import reduce from 'lodash/reduce';
import some from 'lodash/some';

export default class CloudProjectUsersCtrl {
  /* @ngInject */
  constructor($translate, OvhApiCloudProjectUserRole) {
    this.$translate = $translate;
    this.OvhApiCloudProjectUserRole = OvhApiCloudProjectUserRole;
  }

  $onInit() {
    this.model = reduce(this.roles.roles, (model, { id }) => ({
      ...model,
      [id]: some(this.userRoles, { id }),
    }), {});
  }

  editRoles() {
    this.isEditing = true;
    return this.OvhApiCloudProjectUserRole.v6()
      .put({
        serviceName: this.projectId,
        userId: this.userId,
      }, {
        rolesIds: keys(pickBy(this.model, value => value)),
      }).$promise
      .then(() => this.goBack(
        this.$translate.instant('pci_projects_project_users_roles_edit_success'),
      ))
      .catch(error => this.goBack(
        this.$translate.instant('pci_projects_project_users_roles_edit_error', { message: get(error, 'data.message') }),
        'error',
      ));
  }
}
