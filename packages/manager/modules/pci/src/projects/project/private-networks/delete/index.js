import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-translate';
import '@ovh-ux/ng-translate-async-loader';
import 'ovh-ui-angular';
import 'ovh-api-services';
import '@ovh-ux/ng-uirouter-layout';

import component from './delete.component';
import routing from './delete.routing';

const moduleName = 'ovhManagerPciPrivateNetworksDelete';

angular
  .module(moduleName, [
    'ngTranslateAsyncLoader',
    'pascalprecht.translate',
    'oui',
    'ovh-api-services',
    'ui.router',
    'ngUiRouterLayout',
  ])
  .config(routing)
  .component('pciProjectPrivateNetworksDelete', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
