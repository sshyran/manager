import controller from './telephony-scheduler-filters.component.controller';
import template from './telephony-scheduler-filters.html';

export default {
  require: {
    telephonySchedulerCtrl: '^telephonyScheduler',
  },
  template,
  controller,
  bindings: {
    filters: '=ngModel',
    onChange: '&telephonySchedulerFiltersOnChange',
  },
};
