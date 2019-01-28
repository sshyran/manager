import controller from './telephony-group-number-feature-svi.component.controller';
import template from './telephony-group-number-feature-svi-configuration.html';

export default {
  template,
  require: {
    numberCtrl: '^telephonyNumber',
  },
  controller,
};
