export default /* @ngInject */($stateProvider) => {
  $stateProvider.state('pci.projects.project.users.roles', {
    url: '/roles?userId',
    views: {
      modal: {
        component: 'pciProjectsProjectUsersRoles',
      },
    },
    layout: 'modal',
    resolve: {
      breadcrumb: /* @ngInject */ () => null,
      goBack: /* @ngInject */ goToUsers => goToUsers,
      userId: /* @ngInject */ $transition$ => $transition$.params().userId,
      userRoles: /* @ngInject */ (
        OvhApiCloudProjectUserRole,
        projectId,
        userId,
      ) => OvhApiCloudProjectUserRole.v6().query({
        serviceName: projectId,
        userId,
      }).$promise,
    },
  });
};
