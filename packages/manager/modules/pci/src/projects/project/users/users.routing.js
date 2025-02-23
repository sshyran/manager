import { HORIZON_LINK } from './users.constants';

export default /* @ngInject */($stateProvider) => {
  $stateProvider.state('pci.projects.project.users', {
    url: '/users',
    component: 'pciProjectsProjectUsers',
    redirectTo: transition => transition
      .injector()
      .getAsync('users')
      .then(users => (users.length === 0 ? { state: 'pci.projects.project.users.onboarding' } : false)),
    resolve: {
      breadcrumb: /* @ngInject */ $translate => $translate.instant('pci_projects_project_users_title'),
      users: /* @ngInject */ (
        PciProjectsProjectUsersService,
        projectId,
      ) => PciProjectsProjectUsersService.getAll(projectId),
      addUser: /* @ngInject */ ($state, projectId) => () => $state.go('pci.projects.project.users.add', {
        projectId,
      }),
      openStackHorizonLink: /* @ngInject */ () => user => HORIZON_LINK.replace('{username}', user.username),
      downloadOpenStackOpenRc: /* @ngInject */ ($state, projectId) => user => $state.go('pci.projects.project.users.download-openrc', {
        projectId,
        userId: user.id,
      }),
      downloadOpenStackRclone: /* @ngInject */ ($state, projectId) => user => $state.go('pci.projects.project.users.download-rclone', {
        projectId,
        userId: user.id,
      }),
      generateOpenStackToken: /* @ngInject */ ($state, projectId) => user => $state.go('pci.projects.project.users.openstack-token', {
        projectId,
        userId: user.id,
      }),
      deleteUser: /* @ngInject */ ($state, projectId) => user => $state.go('pci.projects.project.users.delete', {
        projectId,
        userId: user.id,
      }),

      goToUsers: /* @ngInject */ ($rootScope, CucCloudMessage, $state, projectId) => (message = false, type = 'success') => {
        const reload = message && type === 'success';

        const promise = $state.go('pci.projects.project.users', {
          projectId,
        },
        {
          reload,
        });

        if (message) {
          promise.then(() => CucCloudMessage[type](message, 'pci.projects.project.users'));
        }

        return promise;
      },
    },
  });
};
