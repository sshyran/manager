import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-menu-list.component';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxFeatureMenuList';

angular.module(moduleName, [])
  .run(/* @ngTranslationsInject ./translations */)
  .component('telephonyNumberOvhPabxMenuList', component);

export default moduleName;
