import angular from 'angular';

import component from './telephony-scheduler-params.component';

const moduleName = 'ovhManagerTelephonySchedulerParams';

angular.module(moduleName, [])
  .component('telephonySchedulerParams', component);

export default moduleName;
