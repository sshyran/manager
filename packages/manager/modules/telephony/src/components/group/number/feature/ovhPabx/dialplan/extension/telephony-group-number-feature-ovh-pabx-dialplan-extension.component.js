

import template from './telephony-group-number-feature-ovh-pabx-dialplan-extension.html';
import controller from './telephony-group-number-feature-ovh-pabx-dialplan-extension.component.controller';

export default {
  template,
  bindings: {
    extension: '=',
  },
  require: {
    numberCtrl: '^^telephonyNumber',
    ovhPabxCtrl: '^^telephonyNumberOvhPabx',
    dialplanCtrl: '^^telephonyNumberOvhPabxDialplan',
  },
  controller,
};
