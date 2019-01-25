import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-dialplan.component';
import factory from './telephony-group-number-feature-ovh-pabx-dialplan.factory';
import editCtrl from './edit/telephony-group-number-feature-ovh-pabx-dialplan-edit.controller';

import extension from './extension';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxDialplan';

angular.module(moduleName, [
  extension,
])
  .component('telephonyNumberOvhPabxDialplan', component)
  .factory('TelephonyGroupNumberOvhPabxDialplan', factory)
  .controller('telephonyNumberOvhPabxDialplanEditCtrl', editCtrl);

export default moduleName;
