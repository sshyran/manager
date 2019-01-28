import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-dialplan.component';
import factory from './telephony-group-number-feature-ovh-pabx-dialplan.factory';
import editCtrl from './edit/telephony-group-number-feature-ovh-pabx-dialplan-edit.controller';
import editTpl from './edit/telephony-group-number-feature-ovh-pabx-dialplan-edit.html';

import extension from './extension';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxDialplan';

angular.module(moduleName, [
  extension,
])
  .run(($templateCache) => {
    $templateCache.put('telephony/group/number/feature/ovhPabx/dialplan/edit/telephony-group-number-feature-ovh-pabx-dialplan-edit.html', editTpl);
  })
  .component('telephonyNumberOvhPabxDialplan', component)
  .factory('TelephonyGroupNumberOvhPabxDialplan', factory)
  .controller('telephonyNumberOvhPabxDialplanEditCtrl', editCtrl);

export default moduleName;
