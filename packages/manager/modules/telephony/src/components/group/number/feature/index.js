import angular from 'angular';
import featureFactory from './number-feature.factory';
import easyHuntingFactory from './easyHunting/telephony-group-number-feature-easy-hunting.factory';
import easyPabxFactory from './easyPabx/telephony-group-number-feature-easy-pabx.factory';
import miniPabxFactory from './miniPabx/telephony-group-number-feature-easy-pabx.factory';

import conference from './conference';
import ovhPabx from './ovhPabx';
import redirect from './redirect';
import svi from './svi';

const moduleName = 'ovhManagerTelephonyGroupNumberFeature';

angular.module(moduleName, [
  conference,
  ovhPabx,
  redirect,
  svi,
])
  .factory('TelephonyGroupNumberFeature', featureFactory)
  .factory('TelephonyGroupNumberEasyHunting', easyHuntingFactory)
  .factory('TelephonyGroupNumberEasyPabx', easyPabxFactory)
  .factory('TelephonyGroupNumberMiniPabx', miniPabxFactory);

export default moduleName;
