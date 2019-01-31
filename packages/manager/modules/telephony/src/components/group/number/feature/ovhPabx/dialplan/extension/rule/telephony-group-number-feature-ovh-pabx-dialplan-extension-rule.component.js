

import template from './telephony-group-number-feature-ovh-pabx-dialplan-extension-rule.html';
import controller from './telephony-group-number-feature-ovh-pabx-dialplan-extension-rule.component.controller';

export default {
  template,
  bindings: {
    rule: '=',
  },
  require: {
    numberCtrl: '^^telephonyNumber',
    ovhPabxCtrl: '^^telephonyNumberOvhPabx',
    dialplanCtrl: '^^telephonyNumberOvhPabxDialplan',
    extensionCtrl: '^^telephonyNumberOvhPabxDialplanExtension',
  },
  controller,
};
