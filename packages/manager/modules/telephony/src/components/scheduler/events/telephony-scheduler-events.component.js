import controller from './telephony-scheduler-events.component.controller';
import template from './telephony-scheduler-events.html';

export default {
  template,
  controller,
  bindings: {
    event: '=ngModel',
    scheduler: '=telephonySchedulerEventsScheduler',
    timeCondition: '=telephonySchedulerEventsTimeCondition',
    onSave: '&telephonySchedulerEventsOnSave',
    onCancel: '&telephonySchedulerEventsOnCancel',
    onDelete: '&telephonySchedulerEventsOnDelete',
  },
};
