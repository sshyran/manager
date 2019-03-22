import angular from 'angular';
import '@uirouter/angularjs';
import '@ovh-ux/ng-translate-async-loader';

import component from './component';

const moduleName = 'ovhManagerPciProjectInstanceDashboard';

angular
  .module(moduleName, [
    'ngOvhOtrs',
    'ui.router',
  ])
  .component('ovhManagerPciProjectInstanceDashboardComponent', component)
  .config(/* @ngInject */ ($stateProvider) => {
    $stateProvider.state('iaas.pci-project.instance.dashboard', {
      url: '/dashboard',
      views: {
        cloudProjectInstance: {
          component: 'ovhManagerPciProjectInstanceDashboardComponent',
        },
      },
      atInternet: { ignore: true },
      resolve: {
        projectId: /* @ngInject */ $stateParams => $stateParams.projectId,
        instanceId: /* @ngInject */ $stateParams => $stateParams.instanceId,
      },
      translations: [
        './',
      ],
    });
  });

export default moduleName;
