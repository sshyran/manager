export default /* @ngInject */($stateProvider) => {
  $stateProvider
    .state('pci.projects.project.users.add', {
      url: '/new',
      views: {
        modal: {
          component: 'pciProjectUsersAdd',
        },
      },
      layout: 'modal',
      resolve: {
        breadcrumb: () => null, // Hide breadcrumb
        goBack: /* @ngInject */ goToUsers => goToUsers,
      },
    });
};
