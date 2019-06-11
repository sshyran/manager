export default class {
  /* @ngInject */
  constructor(OvhApiMe, OvhApiUniverses) {
    this.OvhApiMe = OvhApiMe;
    this.OvhApiUniverses = OvhApiUniverses;
  }

  getUser() {
    return this.OvhApiMe.v6().get().$promise;
  }

  getSupportLevel() {
    return this.OvhApiMe.v6().supportLevel().$promise;
  }

  getUniverses(version) {
    return this.OvhApiUniverses.Aapi().query({
      version,
    }).$promise;
  }
}
