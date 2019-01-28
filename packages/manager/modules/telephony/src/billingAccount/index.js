import angular from 'angular';
import 'oclazyload';

import '@ovh-ux/manager-telecom-styles';

import routing from './telecom-telephony-billing-account.routes';

const moduleName = 'ovhManagerTelephony.billingAccount';

angular
  .module(moduleName, [
    'oc.lazyLoad',
  ])
  .config(routing);

export default moduleName;
