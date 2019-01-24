import angular from 'angular';

import component from './telephony-scheduler-filters.component';

const moduleName = 'ovhManagerTelephonySchedulerFilters';

angular.module(moduleName, [])
  .component('telephonySchedulerFilters', component);

export default moduleName;
