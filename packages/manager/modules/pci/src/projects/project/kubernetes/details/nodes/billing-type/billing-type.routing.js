export default /* @ngInject */ ($stateProvider) => {
  $stateProvider
    .state('pci.projects.project.kubernetes.details.nodes.billing-type', {
      url: '/billing-type?nodeId',
      views: {
        modal: {
          component: 'pciProjectKubernetesNodesBillingTypeComponent',
        },
      },
      layout: 'modal',
      params: {
        nodeId: null,
        nodeName: null,
        instanceId: null,
      },
      resolve: {
        goBack: /* @ngInject */ goToKubernetesNodes => goToKubernetesNodes,
        nodeId: /* @ngInject */ $stateParams => $stateParams.nodeId,
        nodeName: /* @ngInject */ $stateParams => $stateParams.nodeName,
        instanceId: /* @ngInject */ $stateParams => $stateParams.instanceId,
      },
    });
};
