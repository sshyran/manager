import controller from './roles.controller';
import template from './roles.html';

export default {
  bindings: {
    goBack: '<',
    projectId: '<',
    roles: '<',
    userId: '<',
    userRoles: '<',
  },
  controller,
  template,
};
