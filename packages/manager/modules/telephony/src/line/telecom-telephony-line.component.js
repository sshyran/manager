import angular from 'angular';
import merge from 'lodash/merge';

import template from './telecom-telephony-line.html';
import lineCtrl from './telecom-telephony-line.controller';

const moduleName = 'ovhManagerTelephonyLineComponent';

angular.module(moduleName, [
])
  .config(($stateProvider) => {
    $stateProvider.state('telephony.billingAccount.line', {
      url: '/line/:serviceName',
      template,
      controller: lineCtrl,
      controllerAs: 'LineCtrl',
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
/*
views: {
  'telephonyView@telephony': {
    templateUrl: 'app/telecom/telephony/line/telecom-telephony-line.html',
  },
  'lineView@telephony.line': {
    templateUrl: 'app/telecom/telephony/line/telecom-telephony-line-main.view.html',
    controller: 'TelecomTelephonyLineCtrl',
    controllerAs: 'LineCtrl',
  },
  'lineInnerView@telephony.line': {
    templateUrl: 'app/telecom/telephony/line/management/telecom-telephony-line-management.html',
    controller: 'TelecomTelephonyLineManagementCtrl',
    controllerAs: 'LineManagementCtrl',
  },
},
*/

export default moduleName;
