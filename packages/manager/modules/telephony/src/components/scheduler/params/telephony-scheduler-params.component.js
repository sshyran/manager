import controller from './telephony-scheduler-params.component.controller';
import template from './telephony-scheduler-params.html';

export default {
  require: {
    telephonySchedulerCtrl: '^telephonyScheduler',
  },
  template,
  controller,
};
