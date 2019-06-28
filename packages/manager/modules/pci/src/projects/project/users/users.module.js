import angular from 'angular';
import '@uirouter/angularjs';
import '@ovh-ux/ng-translate-async-loader';
import 'angular-translate';
import 'ovh-api-services';

import add from './add';
import deleteUser from './delete';
import downloadOpenRc from './download-openrc';
import downloadRclone from './download-rclone';
import onboarding from './onboarding';
import openstackToken from './openstack-token';
import roles from './roles';
import rolesMatrix from './roles-matrix/roles-matrix.module';

import component from './users.component';
import routing from './users.routing';
import service from './users.service';

const moduleName = 'ovhManagerPciUsers';

angular
  .module(moduleName, [
    add,
    deleteUser,
    downloadOpenRc,
    downloadRclone,
    'ngTranslateAsyncLoader',
    'pascalprecht.translate',
    onboarding,
    openstackToken,
    'ovh-api-services',
    roles,
    rolesMatrix,
    'ui.router',
  ])
  .config(routing)
  .component('pciProjectsProjectUsers', component)
  .service('PciProjectsProjectUsersService', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
