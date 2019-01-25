import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-dialplan-extension-rule.component';
import factory from './telephony-group-number-feature-ovh-pabx-dialplan-extension-rule.factory';
import editCtrl from './edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-rule-edit.controller';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxDialplanExtensionRule';

angular.module(moduleName, [])
  .component('telephonyNumberOvhPabxDialplanExtensionRule', component)
  .factory('TelephonyGroupNumberOvhPabxDialplanExtensionRule', factory)
  .controller('telephonyNumberOvhPabxDialplanExtensionRuleEditCtrl', editCtrl);

export default moduleName;
