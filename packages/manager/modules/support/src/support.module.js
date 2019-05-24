import angular from 'angular';

import ticket from './ticket';
import tickets from './tickets';

import { registerState } from './support.routing';

import '@ovh-ux/ng-translate-async-loader';
import '@uirouter/angularjs';
import 'angular-translate';

const moduleName = 'ovhManagerSupport';

angular
  .module(moduleName, [
    ticket,
    tickets,
    'pascalprecht.translate',
    'ui.router',
  ])
  .config(registerState)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
