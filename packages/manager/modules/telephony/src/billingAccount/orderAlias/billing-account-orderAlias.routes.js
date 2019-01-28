import controller from './billing-account-orderAlias.controller';
import template from './billing-account-orderAlias.html';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('telephony.billingAccount.orderAlias', {
    url: '/orderAlias',
    controller,
    controllerAs: 'AliasOrderCtrl',
    template,
    translations: ['.'],
  });
};
