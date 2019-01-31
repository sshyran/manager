

import controller from './billing-account-billing-bill.controller';
import template from './billing-account-billing-bill.html';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('telephony.billingAccount.billing.bill', {
    url: '/bill',
    views: {
      '@telephony': {
        template,
        controller,
        controllerAs: 'BillingAccountBillCtrl',
      },
    },
    translations: ['.'],
  });
};
