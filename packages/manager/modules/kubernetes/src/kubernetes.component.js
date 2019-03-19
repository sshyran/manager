import angular from 'angular';

import '@ovh-ux/ng-ovh-cloud-universe-components';
import '@ovh-ux/ng-ovh-sidebar-menu';
import 'ovh-api-services';
import 'ovh-ui-angular';

import 'ovh-ui-kit/dist/oui.css';

import controller from './kubernetes.controller';
import template from './kubernetes.html';
import service from './kubernetes.service';

import { KUBERNETES } from './kubernetes.constants';

import serviceComponent from './service/index';

import './kubernetes.scss';

const moduleName = 'OvhManagerKubernetesComponent';

angular.module(moduleName, [
  'ngOvhCloudUniverseComponents',
  'ngOvhSidebarMenu',
  'oui',
  'ovh-api-services',
  serviceComponent,
])
  .config(($stateProvider) => {
    $stateProvider
      .state('kube', {
        url: '/kube/:serviceName',
        component: 'ovhManagerKubernetesComponent',
        params: { serviceName: null },
        resolve: {
          serviceName: /* @ngInject */ $stateParams => $stateParams.serviceName,
        },
        redirectTo: 'kube.service',
        translations: {
          value: ['.'],
          format: 'json',
        },
      });
  })
  .component('ovhManagerKubernetesComponent', {
    bindings: {
      serviceName: '@',
    },
    template,
    controller,
  })
  .constant('KUBERNETES', KUBERNETES)
  .service('Kubernetes', service);


export default moduleName;
