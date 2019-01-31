

import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-dialplan-extension.component';
import factory from './telephony-group-number-feature-ovh-pabx-dialplan-extension.factory';
import editCtrl from './edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-edit.controller';
import editTpl from './edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-edit.html';

import rule from './rule';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxDialplanExtension';

angular.module(moduleName, [
  rule,
])
  .run(($templateCache) => {
    $templateCache.put('telephony/group/number/feature/ovhPabx/dialplan/extension/edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-edit.html', editTpl);
  })
  .component('telephonyNumberOvhPabxDialplanExtension', component)
  .factory('TelephonyGroupNumberOvhPabxDialplanExtension', factory)
  .controller('telephonyNumberOvhPabxDialplanExtensionEditCtrl', editCtrl);

export default moduleName;
