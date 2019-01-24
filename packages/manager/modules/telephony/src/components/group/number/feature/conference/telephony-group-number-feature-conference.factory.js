import _ from 'lodash';
import angular from 'angular';

/**
 *  This factory manages the conference feature of a number.
 *  This manages the conference of /telephony/{billingAccount}/number API.
 */
export default /* @ngInject */ ($q, $timeout, TelephonyGroupNumberConferenceParticipant,
  TelephonyMediator, OvhApiTelephony, OvhApiMe, tucVoipServiceTask) => {
  const settingsAttributes = ['featureType', 'pin', 'announceFile', 'reportEmail',
    'reportStatus', 'whiteLabelReport', 'language', 'recordStatus',
    'eventsChannel', 'anonymousRejection', 'announceFilename',
    'enterMuted',
  ];

  /*= ==================================
    =            CONSTRUCTOR            =
    =================================== */

  function TelephonyGroupNumberConference(featureOptionsParam) {
    let featureOptions = featureOptionsParam;

    // check for mandatory options
    if (!featureOptions) {
      featureOptions = {};
    }

    // check mandatory fields
    if (!featureOptions.billingAccount) {
      throw new Error('billingAccount option must be specified when creating a new TelephonyGroupNumberConference');
    }

    if (!featureOptions.serviceName) {
      throw new Error('serviceName option must be specified when creating a new TelephonyGroupNumberConference');
    }

    if (!featureOptions.featureType) {
      throw new Error('featureType option must be specified when creating a new TelephonyGroupNumberConference');
    }

    // set mandatory attributes
    this.billingAccount = featureOptions.billingAccount;
    this.serviceName = featureOptions.serviceName;
    this.featureType = featureOptions.featureType;

    // from API
    this.locked = false;
    this.membersCount = null;
    this.dateStart = null;

    // custom attributes
    this.inEdition = false;
    this.saveForEdition = null;
    this.participants = [];

    // settings
    this.pin = null;
    this.announceFile = false;
    this.reportEmail = null;
    this.reportStatus = null;
    this.whiteLabelReport = false;
    this.language = null;
    this.recordStatus = false;
    this.eventsChannel = null;
    this.anonymousRejection = false;
    this.announceFilename = false;
    this.enterMuted = false;

    // web access
    this.webAccess = {
      read: null,
      write: null,
    };

    // set feature options
    this.setInfos(featureOptions);
  }

  /* -----  End of CONSTRUCTOR  ------*/

  /*= ========================================
    =            PROTOTYPE METHODS            =
    ========================================= */

  /* ----------  FEATURE OPTIONS  ----------*/

  TelephonyGroupNumberConference.prototype.setInfos = function setInfos(featureOptionsParam) {
    const self = this;
    let featureOptions = featureOptionsParam;

    if (!featureOptions) {
      featureOptions = {};
    }

    self.locked = _.get(featureOptions, 'locked', false);
    self.membersCount = _.get(featureOptions, 'membersCount', null);
    self.dateStart = _.get(featureOptions, 'dateStart', null);

    return self;
  };

  TelephonyGroupNumberConference
    .prototype.setSettings = function setSettings(featureSettingsParam) {
      const self = this;
      let featureSettings = featureSettingsParam;

      if (!featureSettings) {
        featureSettings = {};
      }

      _.assign(self, _.pick(featureSettings, settingsAttributes));
      return self;
    };

  TelephonyGroupNumberConference
    .prototype.setWebAccess = function setWebAccess(featureWebAccessParam) {
      const self = this;
      let featureWebAccess = featureWebAccessParam;

      if (!featureWebAccess) {
        featureWebAccess = [];
      }

      self.webAccess.read = _.find(featureWebAccess, { type: 'read' });
      self.webAccess.write = _.find(featureWebAccess, { type: 'write' });

      return self;
    };

  /* ----------  API CALLS  ----------*/

  TelephonyGroupNumberConference.prototype.getInfos = function getInfos() {
    const self = this;

    return OvhApiTelephony.Conference().v6().informations({
      billingAccount: self.billingAccount,
      serviceName: self.serviceName,
    }).$promise.then(infos => self.setInfos(infos).getParticipants(), (error) => {
      if (error.status === 404) {
        // this means there is nobody in the conference
        // reset participant list
        self.participants = [];

        // reset informations
        return self.setInfos({
          locked: false,
          dateStart: null,
        });
      }
      return $q.reject(error);
    });
  };

  TelephonyGroupNumberConference.prototype.getParticipants = function getParticipants() {
    const self = this;

    return OvhApiTelephony.Conference().Participants().Aapi().query({
      billingAccount: self.billingAccount,
      serviceName: self.serviceName,
    }).$promise.then(participants => self.updateParticipantList(_.chain(participants).map('value').filter(null).value()));
  };

  TelephonyGroupNumberConference.prototype.save = function save() {
    const self = this;
    const settings = _.pick(self, settingsAttributes);

    if (_.isEmpty(settings.pin)) {
      settings.pin = 0;
    }

    return OvhApiTelephony.Conference().v6().updateSettings({
      billingAccount: self.billingAccount,
      serviceName: self.serviceName,
    }, _.omit(settings, ['featureType', 'eventsChannel', 'announceFilename'])).$promise.then(() => self);
  };

  TelephonyGroupNumberConference.prototype.lock = function lock() {
    const self = this;

    return OvhApiTelephony.Conference().v6().lock({
      billingAccount: self.billingAccount,
      serviceName: self.serviceName,
    }, {}).$promise;
  };

  TelephonyGroupNumberConference.prototype.unlock = function unlock() {
    const self = this;

    return OvhApiTelephony.Conference().v6().unlock({
      billingAccount: self.billingAccount,
      serviceName: self.serviceName,
    }, {}).$promise;
  };

  TelephonyGroupNumberConference.prototype.getSettings = function getSettings() {
    const self = this;

    return OvhApiTelephony.Conference().v6().settings({
      billingAccount: self.billingAccount,
      serviceName: self.serviceName,
    }).$promise.then(settings => self.setSettings(settings));
  };

  TelephonyGroupNumberConference.prototype.getWebAccess = function getWebAccess() {
    const self = this;

    return OvhApiTelephony.Conference().WebAccess().v6()
      .query({
        billingAccount: self.billingAccount,
        serviceName: self.serviceName,
      }).$promise
      .then(ids => $q.all(_.map(ids, id => OvhApiTelephony.Conference().WebAccess().v6().get({
        billingAccount: self.billingAccount,
        serviceName: self.serviceName,
        id,
      }).$promise)).then((webAccess) => {
        self.setWebAccess(webAccess);
      }));
  };

  TelephonyGroupNumberConference.prototype.generateWebAccess = function generateWebAccess() {
    const self = this;

    return TelephonyMediator.getApiModelEnum('telephony.ConferenceWebAccessTypeEnum').then(accessType => $q.all(_.map(accessType, type => OvhApiTelephony.Conference().WebAccess().v6().create({
      billingAccount: self.billingAccount,
      serviceName: self.serviceName,
    }, {
      type,
    }).$promise)).then(() => self.getWebAccess()));
  };

  TelephonyGroupNumberConference.prototype.deleteWebAccess = function deleteWebAccess() {
    const self = this;
    const ids = [].concat(_.get(self.webAccess, 'read.id'), _.get(self.webAccess, 'write.id'));

    return $q
      .all(_.map(
        _.chain(ids).compact().value(),
        id => OvhApiTelephony.Conference().WebAccess().v6()
          .remove({
            billingAccount: self.billingAccount,
            serviceName: self.serviceName,
            id,
          }).$promise,
      ))
      .then(() => {
        self.webAccess = {
          read: null,
          write: null,
        };
      });
  };

  TelephonyGroupNumberConference.prototype.announceUpload = function announceUpload(file) {
    const self = this;

    return OvhApiMe.Document().v6()
      .upload(file.name, file)
      .then(doc => OvhApiTelephony.Conference().v6()
        .announceUpload({
          billingAccount: self.billingAccount,
          serviceName: self.serviceName,
        }, {
          documentId: doc.id,
        }).$promise
        .then(task => tucVoipServiceTask
          .startPolling(
            self.billingAccount,
            self.serviceName,
            task.taskId,
            {
              namespace: `announceUpload_${self.serviceName}`,
              interval: 1000,
              retryMaxAttempts: 0,
            },
          )
          .catch((err) => {
            if (err.status === 404) {
              // add some delay to ensure we get the sound from api when refreshing
              return $timeout(() => $q.when(true), 2000);
            }
            return $q.reject(err);
          })));
  };

  /* ----------  PARTICIPATNS  ----------*/

  TelephonyGroupNumberConference
    .prototype.updateParticipantList = function updateParticipantList(participantsList) {
      const self = this;
      const curParticipantIds = _.map(self.participants, 'id');
      const participantsListIds = _.map(participantsList, 'id');
      const participantsIdsToRemove = _.difference(curParticipantIds, participantsListIds);
      const participantsIdsToAddOrUpdate = _.difference(
        participantsListIds,
        participantsIdsToRemove,
      );

      // remove participants
      angular.forEach(participantsIdsToRemove, (id) => {
        _.remove(self.participants, {
          id,
        });
      });

      // add participants
      angular.forEach(participantsIdsToAddOrUpdate, (id) => {
        self.addParticipant(_.find(participantsList, {
          id,
        }));
      });

      return self;
    };

  TelephonyGroupNumberConference
    .prototype.addParticipant = function addParticipant(participantOptions) {
      const self = this;
      let connectedParticipant = _.find(self.participants, {
        id: participantOptions.id,
      });

      if (!connectedParticipant) {
        connectedParticipant = new TelephonyGroupNumberConferenceParticipant(angular.extend(
          participantOptions,
          {
            billingAccount: self.billingAccount,
            serviceName: self.serviceName,
          },
        ));
        self.participants.push(connectedParticipant);
      } else {
        connectedParticipant.setInfos(participantOptions);
      }

      return connectedParticipant;
    };

  TelephonyGroupNumberConference.prototype.muteAllParticipants = function muteAllParticipants() {
    const self = this;

    return $q.allSettled(_.map(self.participants, participant => participant.mute()));
  };

  TelephonyGroupNumberConference
    .prototype.unmuteAllParticipants = function unmuteAllParticipants() {
      const self = this;

      return $q.allSettled(_.map(self.participants, participant => participant.unmute()));
    };

  /* ----------  EDITION  ----------*/

  TelephonyGroupNumberConference.prototype.startEdition = function startEdition() {
    const self = this;

    self.inEdition = true;
    self.saveForEdition = _.assign({}, _.pick(self, settingsAttributes));

    return self;
  };

  TelephonyGroupNumberConference.prototype.stopEdition = function stopEdition(cancel) {
    const self = this;

    if (self.saveForEdition && cancel) {
      _.assign(self, _.pick(self.saveForEdition, settingsAttributes));
    }

    self.saveForEdition = null;
    self.inEdition = false;

    return self;
  };

  TelephonyGroupNumberConference.prototype.hasChange = function hasChange() {
    const self = this;

    if (!self.inEdition || !self.saveForEdition) {
      return false;
    }

    return self.inEdition && !angular.equals(
      _.pick(self.saveForEdition, settingsAttributes),
      _.pick(self, settingsAttributes),
    );
  };

  /* ----------  HELPERS  ----------*/

  TelephonyGroupNumberConference.prototype.inPendingState = function inPendingState() {
    return true;
  };

  TelephonyGroupNumberConference.prototype.hasParticipants = function hasParticipants() {
    const self = this;

    return self.participants.length > 0;
  };

  /* ----------  INITIALIZATION  ----------*/

  TelephonyGroupNumberConference.prototype.init = function init() {
    const self = this;

    return OvhApiTelephony.Conference().v6().get({
      billingAccount: self.billingAccount,
      serviceName: self.serviceName,
    }).$promise.then(() => self.getInfos());
  };

  /* -----  End of PROTOTYPE METHODS  ------*/

  return TelephonyGroupNumberConference;
};
