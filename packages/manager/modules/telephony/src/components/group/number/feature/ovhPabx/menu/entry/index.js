

import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-menu-entry.component';
import factory from './telephony-group-number-feature-ovh-pabx-menu-entry.factory';
import editCtrl from './edit/telephony-group-number-feature-ovh-pabx-menu-entry-edit.controller';
import editTpl from './edit/telephony-group-number-feature-ovh-pabx-menu-entry-edit.html';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxFeatureMenuEntry';

angular.module(moduleName, [])
  .run(($templateCache) => {
    $templateCache.put('telephony/group/number/feature/ovhPabx/menu/entry/edit/telephony-group-number-feature-ovh-pabx-menu-entry-edit.html', editTpl);
  })
  .component('telephonyNumberOvhPabxMenuEntry', component)
  .factory('TelephonyGroupNumberOvhPabxMenuEntry', factory)
  .controller('telephonyNumberOvhPabxMenuEntryEditCtrl', editCtrl);

export default moduleName;
