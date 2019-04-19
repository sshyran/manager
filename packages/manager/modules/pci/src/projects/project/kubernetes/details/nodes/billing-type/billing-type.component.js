import controller from './controller';
import template from './template.html';

const component = {
  bindings: {
    goBack: '<',
    kubeId: '<',
    nodeId: '<',
    projectId: '<',
    nodeName: '<',
    instanceId: '<',
  },
  template,
  controller,
};

export default component;
