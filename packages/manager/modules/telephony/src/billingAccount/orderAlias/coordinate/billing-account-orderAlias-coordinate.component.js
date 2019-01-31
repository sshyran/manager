

import template from './billing-account-orderAlias-coordinate.html';

export default {
  template,
  bindings: {
    ngModel: '=?',
    ngDisabled: '=?',
    regionCode: '@',
    hideChoice: '=?',
  },
  /* @ngInject */ controller(tucValidator) {
    this.validator = tucValidator;
  },
};
