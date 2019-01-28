
import _ from 'lodash';
import template from './billing-account-orderAlias-coordinate-address.html';

export default {
  template,
  bindings: {
    ngModel: '=?',
    regionCode: '@',
    ngDisabled: '=?',
  },
  /* @ngInject */ controller($scope, OvhApiNewAccount) {
    const self = this;

    this.validator = {
      isZipcode() {
        return true;
      },
    };

    this.getValidator = function getValidator() {
      if (this.regionCode) {
        OvhApiNewAccount.CreationRules().v6().get({
          country: this.regionCode === 'uk' ? 'GB' : this.regionCode.toUpperCase(),
          legalform: 'corporation',
          ovhCompany: 'ovh',
          ovhSubsidiary: 'FR',
        }).$promise.then((rules) => {
          const zipCodeRegexp = _.get(rules, 'zip.regularExpression');
          if (zipCodeRegexp) {
            self.validator.isZipcode = value => new RegExp(zipCodeRegexp).test(value);
          }
          return self.validator;
        });
      }
    };

    $scope.$watch('$ctrl.regionCode', (newVal, oldVal) => {
      if (newVal !== oldVal) {
        self.getValidator();
      }
    });

    this.$onInit = function $onInit() {
      return this.getValidator();
    };
  },
};
