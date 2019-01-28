import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-menu.component';
import factory from './telephony-group-number-feature-ovh-pabx-menu.factory';
import './telephony-group-number-feature-ovh-pabx-menu.less';

import edit from './edit';
import entry from './entry';
import list from './list';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxFeatureMenu';

angular.module(moduleName, [
  edit,
  entry,
  list,
])
  .run(/* @ngTranslationsInject ./translations */)
  .factory('TelephonyGroupNumberOvhPabxMenu', factory)
  .component('telephonyNumberOvhPabxMenu', component);

export default moduleName;
