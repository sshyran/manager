import angular from 'angular';
import '@uirouter/angularjs';
import reviewComponent from './review.component';

const moduleName = 'ovhManagerAnalyticsDataPlatformDeployReviewComponent';

angular
  .module(moduleName, [
    'ui.router',
  ])
  .component('reviewComponent', reviewComponent)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
