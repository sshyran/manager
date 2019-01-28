import angular from 'angular';
import component from './telephony-group-number-feature-ovh-pabx-sound-popover-section.component';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxSoundPopoverSection';

angular.module(moduleName, [])
  .run(/* @ngTranslationsInject ./translations */)
  .component('telephonyNumberOvhPabxSoundPopoverSection', component);

export default moduleName;
