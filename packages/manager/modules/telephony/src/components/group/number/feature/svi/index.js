import angular from 'angular';
import factory from './telephony-group-number-feature-svi.factory';
import component from './telephony-group-number-feature-svi.component';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureSvi';

angular.module(moduleName, [])
  .component('telephonyNumberSvi', component)
  .factory('TelephonyGroupNumberSvi', factory);

export default moduleName;
