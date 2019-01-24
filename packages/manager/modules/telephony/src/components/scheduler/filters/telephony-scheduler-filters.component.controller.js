import _ from 'lodash';

export default /* @ngInject */ function (telephonyScheduler) {
  const self = this;
  let categories = null;

  self.loading = {
    init: true,
  };

  self.chunkedCategories = null;

  /*= ==============================
    =            HELPERS            =
    =============================== */

  self.convertCategoryToSlot = function convertCategoryToSlot(category) {
    return telephonyScheduler
      .convertCategoryToSlot(self.telephonySchedulerCtrl.timeCondition, category);
  };

  /* -----  End of HELPERS  ------*/

  /*= ==============================
    =            ACTIONS            =
    =============================== */

  self.toggleCategoryDisplay = function toggleCategoryDisplay(category) {
    _.set(category, 'active', !category.active);

    self.filters.categories = _.chain(categories).filter({
      active: false,
    }).map('value').value();

    self.onChange();
  };

  /* -----  End of ACTIONS  ------*/

  /*= =====================================
    =            INITIALIZATION            =
    ====================================== */

  self.$onInit = function $onInit() {
    self.loading.init = true;
    self.telephonySchedulerCtrl.loading.filters = true;

    // check params
    self.filters = _.defaults(self.filters || {}, {
      categories: [], // will contain all categories to hide
    });

    return telephonyScheduler.getAvailableCategories().then((apiCategories) => {
      categories = _.chain(apiCategories)
        .filter(category => (self.telephonySchedulerCtrl.timeCondition
          ? self.convertCategoryToSlot(category) : true))
        .map(category => ({
          value: category,
          active: true,
        })).value();

      self.chunkedCategories = _.chunk(categories, 2);
    }).finally(() => {
      self.loading.init = false;
      self.telephonySchedulerCtrl.loading.filters = false;
    });
  };

  /* -----  End of INITIALIZATION  ------*/
}
