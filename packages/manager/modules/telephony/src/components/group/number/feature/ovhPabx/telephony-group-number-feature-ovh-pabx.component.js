

import template from './telephony-group-number-feature-ovh-pabx.html';
import controller from './telephony-group-number-feature-ovh-pabx.component.controller';

export default {
  template,
  require: {
    numberCtrl: '^^telephonyNumber',
  },
  controller,
};
