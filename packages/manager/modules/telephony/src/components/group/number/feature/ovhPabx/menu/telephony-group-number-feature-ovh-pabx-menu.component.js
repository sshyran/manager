import controller from './telephony-group-number-feature-ovh-pabx-menu.component.controller';
import template from './telephony-group-number-feature-ovh-pabx-menu.html';

export default {
  template,
  require: {
    numberCtrl: '^^?telephonyNumber',
    dialplanCtrl: '^^?telephonyNumberOvhPabxDialplan',
    extensionCtrl: '^^?telephonyNumberOvhPabxDialplanExtension',
    menuCtrl: '^^?telephonyNumberOvhPabxMenu',
  },
  bindings: {
    ovhPabx: '=?ovhPabx',
    jsplumbInstance: '=?ovhPabxMenuJsplumbInstance',
    menu: '=ovhPabxMenu',
    menuEntry: '=?ovhPabxMenuEntry',
    dialplanRule: '=?dialplanRule',
  },
  controller,
};
