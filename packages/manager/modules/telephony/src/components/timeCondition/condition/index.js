import angular from 'angular';
import voipTimeConditionCondition from './telephony-time-condition-condition.factory';
import voipTimeConditionConditionEditCtrl from './edit/telephony-time-condition-condition-edit.controller';
import voipTimeConditionConditionEditTpl from './edit/telephony-time-condition-condition-edit.html';

const moduleName = 'ovhManagerTelephonyTimeConditionCondition';

angular.module(moduleName, [
])
  .run(/* @ngTranslationsInject ./translations */)
  .run(($templateCache) => {
    $templateCache.put('telephony/timeCondition/condition/edit/telephony-time-condition-condition-edit.html', voipTimeConditionConditionEditTpl);
  })
  .factory('VoipTimeConditionCondition', voipTimeConditionCondition)
  .controller('voipTimeConditionConditionCtrl', voipTimeConditionConditionEditCtrl);

export default moduleName;
