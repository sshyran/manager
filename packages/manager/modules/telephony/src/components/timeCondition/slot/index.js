import angular from 'angular';
import timeConditionSlot from './telephony-time-condition-slot.factory';
import timeConditionComponent from './telephony-time-condition-slot.component';
import timeConditionEditCtrl from './edit/telephony-time-condition-slot-edit.controller';
import timeConditionSlotEditTpl from './edit/telephony-time-condition-slot-edit.html';

const moduleName = 'ovhManagerTelephonyTimeConditionSlot';

angular.module(moduleName, [
])
  .run(/* @ngTranslationsInject ./translations */)
  .run(($templateCache) => {
    $templateCache.put('telephony/timeCondition/slot/edit/telephony-time-condition-slot-edit.html', timeConditionSlotEditTpl);
  })
  .controller('voipTimeConditionSlotEditCtrl', timeConditionEditCtrl)
  .factory('VoipTimeConditionSlot', timeConditionSlot)
  .component('voipTimeConditionSlot', timeConditionComponent);

export default moduleName;
