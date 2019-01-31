

import get from 'lodash/get';

export default /* @ngInject */ function ($q, $translate, TelephonyMediator, TucToast) {
  const self = this;

  self.popoverDatas = {
    isOpen: false,
    configType: null,
  };

  self.loading = {
    dialplan: false,
    translations: false,
  };

  self.ovhPabx = null;
  self.dialplan = null;

  /*= ==============================
    =            HELPERS            =
    =============================== */

  self.refreshDisplayedDialplan = function refreshDisplayedDialplan() {
    // for the moment it will only have one dialplan per ovhPabx. So we take the first.
    self.dialplan = get(self.numberCtrl.number.feature.dialplans, '[0]');
  };

  /* -----  End of HELPERS  ------*/

  /*= =====================================
    =            INITIALIZATION            =
    ====================================== */

  /* ----------  Component initialization  ----------*/

  self.$onInit = function $onInit() {
    // set loading
    self.numberCtrl.loading.feature = true;

    // set ovhPabx
    self.ovhPabx = self.numberCtrl.number.feature;

    const initPromises = [
      self.ovhPabx.getDialplans(),
      self.ovhPabx.getSounds(),
      TelephonyMediator.getAll(),
    ];

    if (self.ovhPabx.featureType === 'cloudIvr' || self.ovhPabx.featureType === 'contactCenterSolutionExpert') {
      initPromises.push(self.ovhPabx.getMenus(true));
    }
    if (self.ovhPabx.featureType !== 'cloudIvr') {
      initPromises.push(self.ovhPabx.getQueues());
      if (self.ovhPabx.isCcs()) {
        initPromises.push(self.ovhPabx.getTts());
      }
    }

    $q.allSettled(initPromises).then(() => {
      self.refreshDisplayedDialplan();
    }).finally(() => {
      self.numberCtrl.loading.feature = false;
    })
      .catch((error) => {
        TucToast.error($translate.instant('telephony_number_feature_ovh_pabx_load_error'));
        return $q.reject(error);
      });
  };

  /* -----  End of INITIALIZATION  ------*/
}
