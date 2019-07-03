import angular from 'angular';
import '@ovh-ux/ng-translate-async-loader';
import 'angular-translate';
import 'ovh-ui-angular';

import component from './schedule.component';

const moduleName = 'ovhManagerPciWorkflowCreateSchedule';

angular
  .module(moduleName, [
    'oui',
    'ngTranslateAsyncLoader',
    'pascalprecht.translate',
  ])
  .component('pciProjectsProjectWorkflowSchedule', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
