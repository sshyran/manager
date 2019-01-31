

import angular from 'angular';

import component from './telephony-group-number-feature-conference.component';
import factory from './telephony-group-number-feature-conference.factory';
import service from './telephony-group-number-feature-conference-polling.service';
import participantFactory from './participant/telephony-group-number-feature-conference-participant.factory';
import configTpl from './telephony-group-number-feature-conference-configuration.html';
import participantTpl from './participant/telephony-group-number-feature-conference-participant-actions.html';

import './telephony-group-number-feature-conference.less';

const moduleName = 'ovhManagerTelephonyGroupNumberFeatureConference';

angular.module(moduleName, [])
  .run(/* @ngTranslationsInject ./translations */)
  .run(($templateCache) => {
    $templateCache.put('telephony/group/number/feature/conference/telephony-group-number-feature-conference-configuration.html', configTpl);
    $templateCache.put('telephony/group/number/feature/conference/participant/telephony-group-number-feature-conference-participant-actions.html', participantTpl);
  })
  .factory('TelephonyGroupNumberConference', factory)
  .factory('TelephonyGroupNumberConferenceParticipant', participantFactory)
  .service('telephonyGroupNumberConferencePolling', service)
  .component('telephonyNumberConference', component);

export default moduleName;
