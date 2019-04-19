import controller from './controller';
import template from './template.html';

const component = {
  bindings: {
    addNode: '<',
    cluster: '<',
    deleteNode: '<',
    switchBillingType: '<',
    kubeId: '<',
    nodes: '<',
    projectId: '<',
    project: '<',
  },
  template,
  controller,
};

export default component;
