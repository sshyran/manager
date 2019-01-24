import angular from 'angular';

import bankHolidaysCtrl from './bankHolidays/telephony-scheduler-bank-holidays.controller';
import deleteAllCtrl from './deleteAll/telephony-scheduler-delete-all.controller';
import exportCtrl from './export/telephony-scheduler-export.controller';
import importCtrl from './import/telephony-scheduler-import.controller';

const moduleName = 'ovhManagerTelephonySchedulerActions';

angular.module(moduleName, [])
  .controller('TelephonySchedulerBankHolidaysCtrl', bankHolidaysCtrl)
  .controller('TelephonySchedulerDeleteAllCtrl', deleteAllCtrl)
  .controller('TelephonySchedulerExportCtrl', exportCtrl)
  .controller('TelephonySchedulerImportCtrl', importCtrl);

export default moduleName;
