import angular from 'angular';
import timeConditionSlot from './telephony-time-condition-slot.factory';
import timeConditionComponent from './telephony-time-condition-slot.component';
import timeConditionEditCtrl from './edit/telephony-time-condition-slot-edit.controller';

const moduleName = 'ovhManagerTelephonyTimeConditionSlot';

angular.module(moduleName, [
])
  .run(/* @ngTranslationsInject ./translations */)
  .controller('voipTimeConditionSlotEditCtrl', timeConditionEditCtrl)
  .factory('VoipTimeConditionSlot', timeConditionSlot)
  .component('voipTimeConditionSlot', timeConditionComponent);

export default moduleName;
