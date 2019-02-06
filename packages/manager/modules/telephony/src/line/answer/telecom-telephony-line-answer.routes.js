import template from './telecom-telephony-line-answer.html';
import controller from './telecom-telephony-line-answer.controller';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('telephony.billingAccount.line.answer', {
    url: '/answer',
    template,
    controller,
    controllerAs: 'LineAnswerCtrl',
    translations: ['.'],
  });
};
