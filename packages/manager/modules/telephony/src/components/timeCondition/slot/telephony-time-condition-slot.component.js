

import template from './telephony-time-condition-slot.html';
import controller from './telephony-time-condition-slot.component.controller';

export default {
  template,
  bindings: {
    slot: '=timeConditionSlot',
    enableEdition: '<?slotEnableEdition',
    hasPopover: '<?',
    isScheduler: '<?',
  },
  controller,
};
