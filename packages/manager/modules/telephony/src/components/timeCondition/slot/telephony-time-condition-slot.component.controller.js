import _ from 'lodash';

export default class voipTimeConditionSlotCtrl {
  /* @ngInject */
  constructor($state) {
    this.$state = $state;
  }

  getSlotDetail(property) {
    if (this.slot.inEdition && this.slot.saveForEdition) {
      return _.get(this.slot.saveForEdition, property, '');
    }

    return _.get(this.slot, property, '');
  }
}
