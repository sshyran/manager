import template from './telephony-group-number-feature-ovh-pabx-sound-popover-section.html';
import controller from './telephony-group-number-feature-ovh-pabx-sound-popover-section.component.controller';

export default {
  template,
  require: {
    numberCtrl: '^^?telephonyNumber',
  },
  bindings: {
    ovhPabx: '=?',
    selectedSoundId: '=',
    onSoundChange: '&',
  },
  controller,
};
