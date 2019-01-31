

import controller from './telephony-group-number-feature-ovh-pabx-menu-entry.component.controller';
import template from './telephony-group-number-feature-ovh-pabx-menu-entry.html';

export default /* @ngInject */ {
  template,
  require: {
    menuCtrl: '^^telephonyNumberOvhPabxMenu',
    menuEntryCtrl: '^^?telephonyNumberOvhPabxMenuEntry',
    extensionCtrl: '^^?telephonyNumberOvhPabxDialplanExtension',
  },
  bindings: {
    menuEntry: '=',
  },
  controller,
};
