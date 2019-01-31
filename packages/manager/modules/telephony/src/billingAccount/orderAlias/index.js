

import angular from 'angular';

import coordinate from './coordinate';
import geographical from './geographical';
import identity from './identity';
import international from './international';
import nonGeographical from './nonGeographical';
import numberChoice from './numberChoice';
import retractation from './retractation';
import special from './special';

import { TELEPHONY_NUMBER_OFFER } from './billing-account-orderAlias.constant';
import service from './billing-account-orderAlias.service';
import routing from './billing-account-orderAlias.routes';

import './billing-account-orderAlias.less';

const moduleName = 'ovhManagerTelephony.billingAccount.orderAlias';

angular
  .module(moduleName, [
    coordinate,
    geographical,
    identity,
    international,
    nonGeographical,
    numberChoice,
    retractation,
    special,
  ])
  .config(routing)
  .constant('TELEPHONY_NUMBER_OFFER', TELEPHONY_NUMBER_OFFER)
  .service('TelecomTelephonyBillingAccountOrderAliasService', service);

export default moduleName;
