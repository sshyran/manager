import angular from 'angular';
import '@ovh-ux/manager-core';
import '@ovh-ux/ng-ovh-telecom-universe-components';
import '@ovh-ux/ng-q-allsettled';
import 'ng-at-internet';
import 'oclazyload';
import 'ovh-angular-responsive-tabs';

import 'ovh-ui-kit/dist/oui.css';
import 'ovh-ui-kit-bs/dist/ovh-ui-kit-bs.css';
import 'ovh-manager-webfont/dist/css/ovh-font.css';
import 'font-awesome/css/font-awesome.css';

import billingAccount from './billingAccount';
import line from './line';

import constant from './telecom-telephony.constant';
import components from './components';
import service from './service';

import routing from './telecom-telephony.routes';

import './telecom-telephony.scss';

const moduleName = 'ovhManagerTelephony';

angular.module(moduleName, [
  components,
  'ng-at-internet',
  'ovh-angular-responsive-tabs',
  'ovhManagerCore',
  service,
  'ngOvhTelecomUniverseComponents',
  'ngQAllSettled',
  'ui.router',
  billingAccount,
  line,
])
  .constant('PAGINATION_PER_PAGE', 5)
  .constant('TELEPHONY_INFRASTRUCTURE_OPTIONS', constant.TELEPHONY_INFRASTRUCTURE_OPTIONS)
  .constant('TELEPHONY_RMA', constant.TELEPHONY_RMA)
  .constant('TELEPHONY_REPAYMENT_CONSUMPTION', constant.TELEPHONY_REPAYMENT_CONSUMPTION)
  .constant('TELEPHONY_SERVICE', constant.TELEPHONY_SERVICE)
  .constant('TELEPHONY_ALIAS_CONFERENCE', constant.TELEPHONY_ALIAS_CONFERENCE)
  .constant('TELEPHONY_ALIAS_CONTACT_CENTER_SOLUTION', constant.TELEPHONY_ALIAS_CONTACT_CENTER_SOLUTION)
  .constant('TELEPHONY_ALIAS_OBSOLETE_FEATURE_TYPES', constant.TELEPHONY_ALIAS_OBSOLETE_FEATURE_TYPES)
  .constant('TELEPHONY_GUIDES', constant.TELEPHONY_GUIDES)
  .constant('TELEPHONY_REDIRECT_URLS', constant.TELEPHONY_REDIRECT_URLS)
  .constant('TELEPHONY_REDIRECT_V4_HASH', constant.TELEPHONY_REDIRECT_V4_HASH)
  .config(routing);

export default moduleName;
