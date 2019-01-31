

import angular from 'angular';
import component from './telephony-scheduler-events.component';
import voipSchedulerEvents from './telephony-scheduler-events.factory';

const moduleName = 'ovhManagerTelephonySchedulerEvents';

angular.module(moduleName, [
])
  .component('telephonySchedulerEvents', component)
  .factory('VoipSchedulerEvent', voipSchedulerEvents);

export default moduleName;
