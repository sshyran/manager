import controller from './service-information.controller';
import template from './service-information.html';

export default {
  template,
  controller,
  bindings: {
    projectId: '<',
    billingConsole: '<',
    platformDetails: '<',
    publicCloudDetails: '<',
    serviceName: '<',
    terminate: '<',
  },
};
