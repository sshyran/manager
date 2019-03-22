import template from './template.html';
import controller from './controller';

export default {
  template,
  controller,
  bindings: {
    projectId: '<',
    instanceId: '<',
    onClickEdit: '&',
    onClickBackupCreate: '&',
    onClickRescue: '&',
    onClickSoftReboot: '&',
    onClickHardReboot: '&',
    onClickReinstall: '&',
    onClickDelete: '&',
    onClickManageVolumes: '&',
    onClickVolumeAttach: '&',
    onClickNetworkManage: '&',
    onClickNetworkAttach: '&',
  },
};
