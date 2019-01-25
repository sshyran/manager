import template from './telephony-group-number-feature-ovh-pabx-dialplan.html';
import controller from './telephony-group-number-feature-ovh-pabx-dialplan.component.controller';

export default {
  template,
  bindings: {
    dialplan: '=telephonyNumberOvhPabxDialplan',
  },
  require: {
    numberCtrl: '^^telephonyNumber',
    ovhPabxCtrl: '^^telephonyNumberOvhPabx',
  },
  controller,
};
