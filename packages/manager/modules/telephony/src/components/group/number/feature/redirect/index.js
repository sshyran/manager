

import angular from 'angular';
import component from './telephony-group-number-feature-redirect.component';
import factory from './telephony-group-number-feature-redirect.factory';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureRedirect';

angular.module(moduleName, [])
  .component('telephonyNumberRedirect', component)
  .factory('TelephonyGroupNumberRedirect', factory);

export default moduleName;
