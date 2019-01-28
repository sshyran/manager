import angular from 'angular';
import factory from './telephony-group-number-feature-ovh-pabx-tts.factory';
import create from './create';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxTts';

angular.module(moduleName, [
  create,
])
  .run(/* @ngTranslationsInject ./translations */)
  .factory('TelephonyGroupNumberOvhPabxTts', factory);

export default moduleName;
