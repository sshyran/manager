import template from './add.html';
import controller from './add.controller';

export default {
  template,
  controller,
  bindings: {
    onLoaded: '&',
    selectedPaymentType: '=',
    paymentMethodUrl: '<',
    hasPaymentMethods: '<',
  },
};
