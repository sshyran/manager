import angular from 'angular';

import '@ovh-ux/manager-core';
import '@ovh-ux/ng-ovh-api-wrappers'; // should be a peer dependency of ovh-api-services
import 'angular-translate';
import 'ovh-api-services';
import 'ovh-ui-angular';

import newProject from './new';
import onboarding from './onboarding';
import project from './project';

import routing from './projects.routing';

const moduleName = 'ovhManagerPciProjects';

angular
  .module(moduleName, [
    'oui',
    'ovhManagerCore',
    'ovh-api-services',
    'pascalprecht.translate',
    newProject,
    onboarding,
    project,
  ])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
