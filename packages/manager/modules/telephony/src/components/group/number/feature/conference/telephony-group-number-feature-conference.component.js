import controller from './telephony-group-number-feature-conference.component.controller';
import template from './telephony-group-number-feature-conference.html';

export default /* @ngInject */ {
  template,
  require: {
    numberCtrl: '^telephonyNumber',
  },
  controller,
};
