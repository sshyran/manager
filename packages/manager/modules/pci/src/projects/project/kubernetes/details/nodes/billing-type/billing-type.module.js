import angular from 'angular';

import routing from './billing-type.routing';

import component from './billing-type.component';

const moduleName = 'ovhManagerPciProjectKubernetesNodesBillingType';

angular.module(moduleName, [])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */)
  .component('pciProjectKubernetesNodesBillingTypeComponent', component);

export default moduleName;
