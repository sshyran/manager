import angular from 'angular';

import controller from './telecom-sms-sms-outgoing.controller';
import template from './telecom-sms-sms-outgoing.html';

const moduleName = 'ovhManagerSmsSmsOutgoing';

angular.module(moduleName, []).config(($stateProvider) => {
  $stateProvider.state('sms.sms.outgoing', {
    url: '/outgoing',
    views: {
      'smsView@sms': {
        template,
        controller,
        controllerAs: 'SmsOutgoingCtrl',
      },
    },
    translations: ['.'],
  });
});

export default moduleName;
