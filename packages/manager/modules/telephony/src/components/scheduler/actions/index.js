

import angular from 'angular';

import bankHolidaysCtrl from './bankHolidays/telephony-scheduler-bank-holidays.controller';
import deleteAllCtrl from './deleteAll/telephony-scheduler-delete-all.controller';
import exportCtrl from './export/telephony-scheduler-export.controller';
import importCtrl from './import/telephony-scheduler-import.controller';
import importTpl from './import/telephony-scheduler-import.html';
import exportTpl from './export/telephony-scheduler-export.html';
import bankHolidaysTpl from './bankHolidays/telephony-scheduler-bank-holidays.html';
import deleteAllTpl from './deleteAll/telephony-scheduler-delete-all.html';

const moduleName = 'ovhManagerTelephonySchedulerActions';

angular.module(moduleName, [])
  .run(($templateCache) => {
    $templateCache.put('telephony/scheduler/actions/import/telephony-scheduler-import.html', importTpl);
    $templateCache.put('telephony/scheduler/actions/export/telephony-scheduler-export.html', exportTpl);
    $templateCache.put('telephony/scheduler/actions/bankHolidays/telephony-scheduler-bank-holidays.html', bankHolidaysTpl);
    $templateCache.put('telephony/scheduler/actions/deleteAll/telephony-scheduler-delete-all.html', deleteAllTpl);
  })
  .controller('TelephonySchedulerBankHolidaysCtrl', bankHolidaysCtrl)
  .controller('TelephonySchedulerDeleteAllCtrl', deleteAllCtrl)
  .controller('TelephonySchedulerExportCtrl', exportCtrl)
  .controller('TelephonySchedulerImportCtrl', importCtrl);

export default moduleName;
