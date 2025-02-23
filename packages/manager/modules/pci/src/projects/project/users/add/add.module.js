import angular from 'angular';
import '@uirouter/angularjs';

import userAdd from './user-add';
import routing from './add.routing';

const moduleName = 'ovhManagerPciUsersAdd';

angular
  .module(moduleName, [
    userAdd,
    'ui.router',
  ])
  .config(routing);

export default moduleName;
