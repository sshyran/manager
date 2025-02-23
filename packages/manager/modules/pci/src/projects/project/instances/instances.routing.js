export default /* @ngInject */($stateProvider) => {
  $stateProvider.state('pci.projects.project.instances', {
    url: '/instances?help',
    component: 'pciProjectsProjectInstances',
    redirectTo: transition => transition
      .injector()
      .getAsync('instances')
      .then(instances => (instances.length === 0 ? { state: 'pci.projects.project.instances.onboarding' } : false)),
    resolve: {
      breadcrumb: /* @ngInject */ $translate => $translate.instant('pci_projects_project_instances_title'),
      help: /* @ngInject */ $transition$ => $transition$.params().help,
      instances: /* @ngInject */ (
        PciProjectsProjectInstanceService,
        projectId,
      ) => PciProjectsProjectInstanceService.getAll(projectId),
      addInstance: /* @ngInject */ ($state, projectId) => () => $state.go('pci.projects.project.instances.add', {
        projectId,
      }),
      viewInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.instance', {
        projectId,
        instanceId: instance.id,
      }),
      editInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.instance.edit', {
        projectId,
        instanceId: instance.id,
      }),
      enableMonthlyBillingInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.active-monthly-billing', {
        projectId,
        instanceId: instance.id,
      }),
      createBackupInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.backup', {
        projectId,
        instanceId: instance.id,
      }),
      startRescueInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.rescue', {
        projectId,
        instanceId: instance.id,
      }),
      endRescueInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.unrescue', {
        projectId,
        instanceId: instance.id,
      }),
      softRebootInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.soft-reboot', {
        projectId,
        instanceId: instance.id,
      }),
      hardRebootInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.hard-reboot', {
        projectId,
        instanceId: instance.id,
      }),
      reinstallInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.reinstall', {
        projectId,
        instanceId: instance.id,
      }),
      resumeInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.resume', {
        projectId,
        instanceId: instance.id,
      }),
      deleteInstance: /* @ngInject */ ($state, projectId) => instance => $state.go('pci.projects.project.instances.delete', {
        projectId,
        instanceId: instance.id,
      }),
      instanceLink: /* @ngInject */ ($state, projectId) => instance => $state.href('pci.projects.project.instances.instance', {
        projectId,
        instanceId: instance.id,
      }),
      vrackLink: /* @ngInject */ ($state, projectId) => () => $state.href('pci.projects.project.privateNetwork.vrack.new', {
        projectId,
      }),
      vrack: /* @ngInject */ (
        PciPrivateNetworks,
        projectId,
      ) => PciPrivateNetworks.getVrack(projectId),

      goToInstances: /* @ngInject */ (CucCloudMessage, $state, projectId) => (message = false, type = 'success') => {
        const reload = message && type === 'success';

        const promise = $state.go('pci.projects.project.instances', {
          projectId,
        },
        {
          reload,
        });

        if (message) {
          promise.then(() => CucCloudMessage[type](message, 'pci.projects.project.instances'));
        }

        return promise;
      },
    },
  });
};
