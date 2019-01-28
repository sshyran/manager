import angular from 'angular';
import factory from './telephony-group-number-feature-svi.factory';
import component from './telephony-group-number-feature-svi.component';
import configTpl from './telephony-group-number-feature-svi-configuration.html';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureSvi';

angular.module(moduleName, [])
  .run(($templateCache) => {
    $templateCache.put('telephony/group/number/feature/svi/telephony-group-number-feature-svi-configuration.html', configTpl);
  })
  .component('telephonyNumberSvi', component)
  .factory('TelephonyGroupNumberSvi', factory);

export default moduleName;
