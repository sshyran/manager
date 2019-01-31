

import angular from 'angular';

import routing from './billing-account-orderAlias-geographical.routes';

const moduleName = 'ovhManagerTelephony.billingAccount.orderAlias.geographical';

angular
  .module(moduleName, [])
  .config(routing);

export default moduleName;
