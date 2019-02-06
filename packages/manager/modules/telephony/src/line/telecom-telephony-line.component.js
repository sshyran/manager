import angular from 'angular';
import merge from 'lodash/merge';

import template from './telecom-telephony-line.html';
import lineCtrl from './telecom-telephony-line.controller';
import lineManagementCtrl from './management/telecom-telephony-line-management.controller';
import lineManagementTpl from './management/telecom-telephony-line-management.html';

const moduleName = 'ovhManagerTelephonyLineComponent';

angular.module(moduleName, [
])
  .config(($stateProvider) => {
    $stateProvider.state('telephony.billingAccount.line', {
      url: '/line',
      abstract: true,
      views: {
        '@telephony': {
          template,
          controller: lineCtrl,
          controllerAs: 'LineCtrl',
        },
      },
    });
    $stateProvider.state('telephony.billingAccount.line.management', {
      url: '/:serviceName',
      template: lineManagementTpl,
      controller: lineManagementCtrl,
      controllerAs: 'LineManagementCtrl',
      translations: [
        '.',
        './details',
        './management',
      ],
      resolve: {
        currentLine($stateParams, OvhApiTelephony) {
          return OvhApiTelephony.Line().v6().get({
            billingAccount: $stateParams.billingAccount,
            serviceName: $stateParams.serviceName,
          }).$promise.then(line => OvhApiTelephony.Line().v6().simultaneousChannelsDetails({
            billingAccount: $stateParams.billingAccount,
            serviceName: $stateParams.serviceName,
          }).$promise.then(details => details).catch(() => null).then(details => merge(line, {
            simultaneousLinesDetails: details || null,
          }))).catch(() => ({}));
        },
        $title(translations, $stateParams, $translate, currentLine) {
          return $translate.instant('telephony_line_page_title', { name: currentLine.description || $stateParams.serviceName }, null, null, 'escape');
        },
      },
    });
  });

export default moduleName;
