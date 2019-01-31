

import angular from 'angular';
import factory from './telephony-group-number-feature-ovh-pabx-sound.factory';
import list from './list';
import popoverSection from './popover-section';
import uploaderDirective from './uploader/telephony-group-number-feature-ovh-pabx-sound-uploader.directive';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxSound';

angular.module(moduleName, [
  list,
  popoverSection,
])
  .factory('TelephonyGroupNumberOvhPabxSound', factory)
  .directive('telephonyNumberOvhPabxSoundUploader', uploaderDirective);

export default moduleName;
