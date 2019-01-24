export default function voipTimeConditionCalendarCtrl($q) {
  const self = this;

  self.loading = {
    init: false,
  };

  self.eventSources = [];

  self.conditionInEdition = null;
  self.fcEventInEdition = null;

  /*= ==============================
    =            HELPERS            =
    =============================== */

  /* -----  End of HELPERS  ------*/

  /*= =====================================
    =            INITIALIZATION            =
    ====================================== */

  /* ----------  Component initialization  ----------*/

  self.$onInit = function $onInit() {
    self.loading.init = true;

    return $q.all([
      self.timeCondition.getConditions(),
    ]).finally(() => {
      self.loading.init = false;
    });
  };

  /* -----  End of INITIALIZATION  ------*/
}
