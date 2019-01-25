import angular from 'angular';
import featureFactory from './number-feature.factory';
import easyHuntingFactory from './easyHunting/telephony-group-number-feature-easy-hunting.factory';
import easyPabxFactory from './easyPabx/telephony-group-number-feature-easy-pabx.factory';
import miniPabxFactory from './miniPabx/telephony-group-number-feature-easy-pabx.factory';

import conference from './conference';

const moduleName = 'ovhManagerTelephonyGroupNumberFeature';

angular.module(moduleName, [
  conference,
])
  .factory('TelephonyGroupNumberFeature', featureFactory)
  .factory('TelephonyGroupNumberEasyHunting', easyHuntingFactory)
  .factory('TelephonyGroupNumberEasyPabx', easyPabxFactory)
  .factory('TelephonyGroupNumberMiniPabx', miniPabxFactory);

export default moduleName;
