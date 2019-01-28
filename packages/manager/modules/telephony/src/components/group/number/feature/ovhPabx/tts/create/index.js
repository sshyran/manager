import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-tts-create.component';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxTtsCreate';

angular.module(moduleName, [])
  .run(/* @ngTranslationsInject ./translations */)
  .component('telephonyNumberOvhPabxTtsCreate', component);

export default moduleName;
