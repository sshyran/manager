

import template from './telephony-group-number-feature-ovh-pabx-sound-list.html';
import controller from './telephony-group-number-feature-ovh-pabx-sound-list.component.controller';

export default {
  template,
  require: {
    numberCtrl: '^^?telephonyNumber',
    ovhPabxCtrl: '^^?telephonyNumberOvhPabx',
  },
  bindings: {
    ovhPabx: '=?ovhPabx',
    selectedSound: '=?ngModel',
    withChoice: '<?',
    onSoundSelected: '&?',
  },
  controller,
};
