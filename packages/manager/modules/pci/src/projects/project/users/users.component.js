import controller from './users.controller';
import template from './users.html';

export default {
  controller,
  template,
  bindings: {
    projectId: '<',
    users: '<',
    openStackHorizonLink: '<',
    downloadOpenStackOpenRc: '<',
    downloadOpenStackRclone: '<',
    generateOpenStackToken: '<',
    deleteUser: '<',
    addUser: '<',
  },
};
