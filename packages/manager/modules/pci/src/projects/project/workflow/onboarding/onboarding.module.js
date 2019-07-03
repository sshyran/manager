import angular from 'angular';
import '@ovh-ux/ng-translate-async-loader';
import '@uirouter/angularjs';
import 'angular-translate';
import 'ovh-ui-angular';

import component from './onboarding.component';
import routing from './onboarding.routing';

import empty from '../../../../components/project/empty';

const moduleName = 'ovhManagerPciWorkflowOnboardingModule';

angular
  .module(moduleName, [
    empty,
    'ui.router',
    'oui',
    'ngTranslateAsyncLoader',
    'pascalprecht.translate',
  ])
  .config(routing)
  .component('pciProjectWorkflowOnboarding', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
