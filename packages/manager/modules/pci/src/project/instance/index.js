import angular from 'angular';
import '@uirouter/angularjs';
import '@ovh-ux/ng-translate-async-loader';

import component from './component';
import dashboard from './dashboard';

const moduleName = 'ovhManagerPciProjectInstance';

angular
  .module(moduleName, [
    'ngOvhOtrs',
    'ui.router',
    dashboard,
  ])
  .component('ovhManagerPciProjectInstanceComponent', component)
  .config(/* @ngInject */ ($stateProvider) => {
    $stateProvider.state('iaas.pci-project.instance', {
      url: '/instance/{instanceId}',
      views: {
        cloudProject: {
          component: 'ovhManagerPciProjectInstanceComponent',
        },
      },
      atInternet: { ignore: true },
      resolve: {
        projectId: /* @ngInject */ $stateParams => $stateParams.projectId,
        instanceId: /* @ngInject */ $stateParams => $stateParams.instanceId,
      },
    });
  });

export default moduleName;
