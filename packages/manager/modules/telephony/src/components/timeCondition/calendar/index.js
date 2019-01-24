import angular from 'angular';

import directive from './telephony-time-condition-calendar.directive';

const moduleName = 'ovhManagerTelephonyTimeConditionCalendar';

angular.module(moduleName, [])
  .run(/* @ngTranslationsInject ../condition/translations */)
  .directive('voipTimeConditionCalendar', directive);

export default moduleName;
