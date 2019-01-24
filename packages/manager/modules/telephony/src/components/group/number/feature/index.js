import angular from 'angular';
import factory from './number-feature.factory';

import conference from './conference';

const moduleName = 'ovhManagerTelephonyGroupNumberFeature';

angular.module(moduleName, [
  conference,
])
  .factory('TelephonyGroupNumberFeature', factory);

export default moduleName;
