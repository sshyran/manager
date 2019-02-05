export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('telephony.billingAccount.line.**', {
    url: '/line/:line',
    lazyLoad: ($transition$) => {
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

      return import('./telecom-telephony-line.component')
        .then(mod => $ocLazyLoad.inject(mod.default || mod));
    },
  });
};
