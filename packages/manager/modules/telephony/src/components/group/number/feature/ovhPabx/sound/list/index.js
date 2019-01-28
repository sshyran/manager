import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-sound-list.component';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxSoundList';

angular.module(moduleName, [])
  .run(/* @ngTranslationsInject ./translations */)
  .component('telephonyNumberOvhPabxSoundList', component);

export default moduleName;
