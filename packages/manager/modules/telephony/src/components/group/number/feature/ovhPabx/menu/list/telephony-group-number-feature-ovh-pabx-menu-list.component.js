import template from './telephony-group-number-feature-ovh-pabx-menu-list.html';
import controller from './telephony-group-number-feature-ovh-pabx-menu-list.component.controller';

export default {
  template,
  require: {
    numberCtrl: '^^?telephonyNumber',
    ovhPabxCtrl: '^^?telephonyNumberOvhPabx',
  },
  bindings: {
    ovhPabx: '=?ovhPabx',
    selectedMenu: '=?ngModel',
    withChoice: '<?',
    radioName: '@?',
    disableMenuId: '<?',
    onMenuSelected: '&?',
  },
  controller,
};
