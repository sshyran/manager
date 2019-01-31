

import template from './billing-account-orderAlias-coordinate-identity.html';

export default {
  template,
  bindings: {
    ngModel: '=?',
    ngDisabled: '=?',
    organisation: '@',
    regionCode: '@',
  },
  /* @ngInject */ controller(tucValidator) {
    this.validator = tucValidator;
  },
};
