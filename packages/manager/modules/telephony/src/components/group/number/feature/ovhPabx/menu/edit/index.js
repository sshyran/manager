import angular from 'angular';
import controller from './telephony-group-number-feature-ovh-pabx-menu-edit.controller';
import template from './telephony-group-number-feature-ovh-pabx-menu-edit.html';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureOvhPabxFeatureMenuEdit';

angular.module(moduleName, [])
  .run(($templateCache) => {
    $templateCache.put('telephony/group/number/feature/ovhPabx/menu/edit/telephony-group-number-feature-ovh-pabx-menu-edit.html', template);
  })
  .controller('telephonyNumberOvhPabxMenuEditCtrl', controller);

export default moduleName;
