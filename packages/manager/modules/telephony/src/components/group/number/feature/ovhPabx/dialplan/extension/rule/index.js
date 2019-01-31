

import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-dialplan-extension-rule.component';
import factory from './telephony-group-number-feature-ovh-pabx-dialplan-extension-rule.factory';
import editCtrl from './edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-rule-edit.controller';
import editTpl from './edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-rule-edit.html';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxDialplanExtensionRule';

angular.module(moduleName, [])
  .run(($templateCache) => {
    $templateCache.put('telephony/group/number/feature/ovhPabx/dialplan/extension/rule/edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-rule-edit.html', editTpl);
  })
  .component('telephonyNumberOvhPabxDialplanExtensionRule', component)
  .factory('TelephonyGroupNumberOvhPabxDialplanExtensionRule', factory)
  .controller('telephonyNumberOvhPabxDialplanExtensionRuleEditCtrl', editCtrl);

export default moduleName;
