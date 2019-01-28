export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('telephony.billingAccount.**', {
    url: '/:billingAccount',
    lazyLoad: ($transition$) => {
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

      return import('./telecom-telephony-billing-account.component')
        .then(mod => $ocLazyLoad.inject(mod.default || mod));
    },
  });
};
