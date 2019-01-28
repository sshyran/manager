import angular from 'angular';
import 'ui-select';

import routing from './billing-account-orderAlias-international.routes';

const moduleName = 'ovhManagerTelephony.billingAccount.orderAlias.international';

angular
  .module(moduleName, ['ui.select'])
  .config(routing);

export default moduleName;
