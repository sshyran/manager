import angular from 'angular';
import voipTimeConditionCondition from './telephony-time-condition-condition.factory';
import voipTimeConditionConditionEdit from './edit/telephony-time-condition-condition-edit.controller';

const moduleName = 'ovhManagerTelephonyTimeConditionCondition';

angular.module(moduleName, [
])
  .run(/* @ngTranslationsInject ./translations */)
  .factory('VoipTimeConditionCondition', voipTimeConditionCondition)
  .controller('voipTimeConditionConditionCtrl', voipTimeConditionConditionEdit);

export default moduleName;
