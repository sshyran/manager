

import controller from './telephony-group-number-feature-ovh-pabx-tts-create.component.controller';
import template from './telephony-group-number-feature-ovh-pabx-tts-create.html';

export default {
  template,
  require: {
    numberCtrl: '^^?telephonyNumber',
    ovhPabxCtrl: '^^?telephonyNumberOvhPabx',
  },
  bindings: {
    ovhPabx: '=?ovhPabx',
    onTtsCreationCancel: '&?',
    onTtsCreationSuccess: '&?',
  },
  controller,
};
