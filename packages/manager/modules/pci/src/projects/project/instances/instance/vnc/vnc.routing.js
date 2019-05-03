export default /* @ngInject */($stateProvider) => {
  $stateProvider
    .state('pci.projects.project.instances.instance.vnc', {
      url: '/vnc',
      component: 'pciInstancesInstanceVNC',
      translations: {
        value: ['.'],
        format: 'json',
      },
      resolve: {
        vncInfos: /* @ngInject */(
          PciProjectsProjectInstanceService,
          instance,
          projectId,
        ) => PciProjectsProjectInstanceService.getVNCInfos(projectId, instance),
      },
    });
};
