import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-dialplan-extension.component';
import factory from './telephony-group-number-feature-ovh-pabx-dialplan-extension.factory';
import editCtrl from './edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-edit.controller';

import rule from './rule';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxDialplanExtension';

angular.module(moduleName, [
  rule,
])
  .component('telephonyNumberOvhPabxDialplanExtension', component)
  .factory('TelephonyGroupNumberOvhPabxDialplanExtension', factory)
  .controller('telephonyNumberOvhPabxDialplanExtensionEditCtrl', editCtrl);

export default moduleName;
