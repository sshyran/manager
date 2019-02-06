import angular from 'angular';
import routing from './telecom-telephony-line-answer.routes';

const moduleName = 'ovhManagerTelephony.line.answer';

angular
  .module(moduleName, [])
  .config(routing);

export default moduleName;
