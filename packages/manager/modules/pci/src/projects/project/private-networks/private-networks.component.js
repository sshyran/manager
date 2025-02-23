import controller from './private-networks.controller';
import template from './private-networks.html';

export default {
  bindings: {
    projectId: '<',
    createNetwork: '<',
    deleteNetwork: '<',
    privateNetworks: '<',
  },
  controller,
  template,
};
