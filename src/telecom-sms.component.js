import angular from 'angular';

import '@ovh-ux/ng-ovh-telecom-universe-components';
import '@ovh-ux/manager-telecom-styles';
import 'angular-messages';
import 'ovh-angular-checkbox-table';
import 'ovh-angular-responsive-tabs';
import 'ovh-angular-pagination-front';
import 'ovh-api-services';

import 'ovh-ui-kit/dist/oui.css';
import 'ovh-ui-kit-bs/dist/ovh-ui-kit-bs.css';
import 'ovh-manager-webfont/dist/css/ovh-font.css';
import 'font-awesome/css/font-awesome.css';

import './telecom-sms.less';

import constant from './telecom-sms.constant';
import controller from './telecom-sms.controller';
import smsView from './telecom-sms.html';

import dashboard from './dashboard';
import guides from './guides';
import options from './options';
import order from './order';
import phonebooks from './phonebooks';
import receivers from './receivers';
import senders from './senders';
import sms from './sms';
import users from './users';

import './telecom-sms.scss';

const moduleName = 'ovhManagerSmsComponent';

angular
  .module(moduleName, [
    'ngOvhTelecomUniverseComponents',
    'ovh-angular-checkbox-table',
    'ovh-angular-pagination-front',
    'ovh-angular-responsive-tabs',
    'ovh-api-services',
    'ngMessages',
    dashboard,
    guides,
    options,
    order,
    phonebooks,
    receivers,
    senders,
    sms,
    users,
  ])
  .constant('SMS_URL', constant.SMS_URL)
  .constant('SMS_GUIDES', constant.SMS_GUIDES)
  .constant('SMS_ALERTS', constant.SMS_ALERTS)
  .constant('SMS_PHONEBOOKS', constant.SMS_PHONEBOOKS)
  .config(($stateProvider) => {
    $stateProvider.state('sms.service', {
      url: '/:serviceName',
      views: {
        '': {
          template: smsView,
          controller,
          controllerAs: 'TelecomSmsCtrl',
        },
      },
      abstract: true,
      resolve: {
        initSms: ($q, $stateParams, TucSmsMediator) => {
          // init sms services
          TucSmsMediator.initAll().then(smsDetails => TucSmsMediator
            .setCurrentSmsService(smsDetails[$stateParams.serviceName]));
          return $q.when({ init: true });
        },

        $title: (translations, $translate, OvhApiSms, $stateParams) => OvhApiSms.v6()
          .get({
            serviceName: $stateParams.serviceName,
          }).$promise
          .then(data => $translate.instant('sms_page_title', { name: data.description || $stateParams.serviceName }, null, null, 'escape'))
          .catch(() => $translate('sms_page_title', { name: $stateParams.serviceName })),
      },
      translations: [
        '.',
      ],
    });
  });

export default moduleName;
