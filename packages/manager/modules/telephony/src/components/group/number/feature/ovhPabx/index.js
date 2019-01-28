import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx.component';
import factory from './telephony-group-number-feature-ovh-pabx.factory';

import dialplan from './dialplan';
import tts from './tts';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabx';

angular.module(moduleName, [
  dialplan,
  tts,
])
  .run(/* @ngTranslationsInject ./translations */)
  .run(/* @ngTranslationsInject ./types/cloudHunting */)
  .run(/* @ngTranslationsInject ./types/cloudIvr */)
  .run(/* @ngTranslationsInject ./types/contactCenterSolutionExpert */)
  .component('telephonyNumberOvhPabx', component)
  .factory('TelephonyGroupNumberOvhPabx', factory);

export default moduleName;
