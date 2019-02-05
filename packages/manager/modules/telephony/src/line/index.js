import angular from 'angular';
import 'oclazyload';
import '@ovh-ux/manager-telecom-styles';

import routing from './telecom-telephony-line.routes';

const moduleName = 'ovhManagerTelephony.line';

angular
  .module(moduleName, [
    'oc.lazyLoad',
  ])
  .config(routing);

export default moduleName;
