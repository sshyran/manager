

import controller from './telephony-group-number-feature-redirect.component.controller';
import template from './telephony-group-number-feature-redirect.html';

export default {
  template,
  require: {
    numberCtrl: '^telephonyNumber',
  },
  controller,
};
