## [6.2.3](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@6.2.2...@ovh-ux/manager-sms@6.2.3) (2019-06-05)


### Bug Fixes

* **sms.compose.sender:** fix regex to detect alphanum number ([#745](https://github.com/ovh-ux/manager/issues/745)) ([e0e6bb8](https://github.com/ovh-ux/manager/commit/e0e6bb8))



## [6.2.2](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@6.2.1...@ovh-ux/manager-sms@6.2.2) (2019-05-23)


### Bug Fixes

* **sms.sms.compose:** display STOP option only when needed ([#389](https://github.com/ovh-ux/manager/issues/389)) ([4c1d855](https://github.com/ovh-ux/manager/commit/4c1d855))



## [6.2.1](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@6.2.0...@ovh-ux/manager-sms@6.2.1) (2019-05-13)


### Bug Fixes

* **deps:** upgrade ng-ovh-telecom-universe-components to v3.0.3 ([574ff83](https://github.com/ovh-ux/manager/commit/574ff83))



# [6.2.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@6.1.0...@ovh-ux/manager-sms@6.2.0) (2019-05-07)


### Bug Fixes

* **sms.options:** reset notification sender on change type ([#450](https://github.com/ovh-ux/manager/issues/450)) ([92a2824](https://github.com/ovh-ux/manager/commit/92a2824))


### Features

* **storages.volume-snapshots:** add volume-snapshots list ([#359](https://github.com/ovh-ux/manager/issues/359)) ([c8a63fd](https://github.com/ovh-ux/manager/commit/c8a63fd))



# [6.1.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@6.0.0...@ovh-ux/manager-sms@6.1.0) (2019-03-22)


### Features

* **pci:** add @ovh-ux/manager-pci package ([#230](https://github.com/ovh-ux/manager/issues/230)) ([9c36a75](https://github.com/ovh-ux/manager/commit/9c36a75))



# [6.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@5.0.0...@ovh-ux/manager-sms@6.0.0) (2019-03-19)


### Code Refactoring

* bump all packages to [@ovh-ux](https://github.com/ovh-ux)/manager-core@^5.0.0 ([7cbc70a](https://github.com/ovh-ux/manager/commit/7cbc70a))


### BREAKING CHANGES

* Until theses packages has a dependency to @ovh-ux/manager-core@^5.0.0, the host project needs to import @ovh-ux/manager-config

Before:

yarn add @ovh-ux/manager-core

Now:

yarn add @ovh-ux/manager-config
yarn add @ovh-ux/manager-core



# [5.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@4.0.0...@ovh-ux/manager-sms@5.0.0) (2019-03-14)


### Build System

* **deps:** upgrade ng-at-internet to v4.0.0 ([#265](https://github.com/ovh-ux/manager/issues/265)) ([e89e179](https://github.com/ovh-ux/manager/commit/e89e179))


### BREAKING CHANGES

* **deps:** replace `ng-at-internet` by `@ovh-ux/ng-at-internet`



# [4.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@3.1.0...@ovh-ux/manager-sms@4.0.0) (2019-03-13)


### Build System

* **deps:** upgrade dependencies ([#252](https://github.com/ovh-ux/manager/issues/252)) ([f87f7b7](https://github.com/ovh-ux/manager/commit/f87f7b7))


### BREAKING CHANGES

* **deps:** replace both `@ovh-ux/ng-ovh-apiv7` and `ovh-angular-swimming-poll` by `@ovh-ux/ng-ovh-api-wrappers` and `@ovh-ux/ng-ovh-swimming-poll`



# [3.1.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@3.0.0...@ovh-ux/manager-sms@3.1.0) (2019-03-08)


### Features

* **sms.senders:** add column to display sender reason of reject ([7b9ba02](https://github.com/ovh-ux/manager/commit/7b9ba02))



# [3.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@2.0.1...@ovh-ux/manager-sms@3.0.0) (2019-02-26)


### Bug Fixes

* **sms:** fix title of edit notification modal ([bf44227](https://github.com/ovh-ux/manager/commit/bf44227))
* **sms.incoming:** set right modal template for deleting ([#207](https://github.com/ovh-ux/manager/issues/207)) ([c1ca949](https://github.com/ovh-ux/manager/commit/c1ca949))


### Build System

* **deps:** upgrade ng-ovh-apiv7 to v2.0.0 ([ac6ac62](https://github.com/ovh-ux/manager/commit/ac6ac62))
* **deps:** upgrade ng-pagination-front to v8.0.0-alpha.0 ([f820440](https://github.com/ovh-ux/manager/commit/f820440))


### Features

* **sms:** replace responsive-tabs by header-tabs component ([#203](https://github.com/ovh-ux/manager/issues/203)) ([f5cb0eb](https://github.com/ovh-ux/manager/commit/f5cb0eb))


### BREAKING CHANGES

* **deps:** replace `ovh-angular-apiv7` by `@ovh-ux/ng-ovh-apiv7`
* **deps:** replace `ovh-angular-pagination-front` by `@ovh-ux/ng-pagination-front`



## [2.0.1](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@2.0.0...@ovh-ux/manager-sms@2.0.1) (2019-02-05)


### Bug Fixes

* **sms.options:** set right modal title ([#158](https://github.com/ovh-ux/manager/issues/158)) ([7ae753f](https://github.com/ovh-ux/manager/commit/7ae753f))



# [2.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@1.0.2...@ovh-ux/manager-sms@2.0.0) (2019-01-29)


### Build System

* **deps:** upgrade ng-ovh-telecom-universe-components to v2.0.1 ([3ffc516](https://github.com/ovh-ux/manager/commit/3ffc516))


### BREAKING CHANGES

* **deps:** replace `@ovh-ux/telecom-universe-components` by `@ovh-ux/ng-ovh-telecom-universe-components`



## [1.0.2](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@1.0.1...@ovh-ux/manager-sms@1.0.2) (2019-01-25)


### Bug Fixes

* **sms:** add error missing dependencies ([#144](https://github.com/ovh-ux/manager/issues/144)) ([b96ff13](https://github.com/ovh-ux/manager/commit/b96ff13))
* **sms.compose:** improve addPhonebookContact form display ([6a0e6d5](https://github.com/ovh-ux/manager/commit/6a0e6d5))



## [1.0.1](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@1.0.0...@ovh-ux/manager-sms@1.0.1) (2019-01-24)


### Bug Fixes

* **sms:** restore access to states ([d9d3355](https://github.com/ovh-ux/manager/commit/d9d3355))



# [1.0.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@0.1.4...@ovh-ux/manager-sms@1.0.0) (2019-01-23)


### Features

* **sms:** add global sms order ([e723a8b](https://github.com/ovh-ux/manager/commit/e723a8b))


### BREAKING CHANGES

* **sms:** rename sms.* states to sms.service.*



## [0.1.4](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@0.1.3...@ovh-ux/manager-sms@0.1.4) (2019-01-21)


### Bug Fixes

* **telecom-styles:** fix elements using rem ([00c5425](https://github.com/ovh-ux/manager/commit/00c5425))



## [0.1.3](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@0.1.2...@ovh-ux/manager-sms@0.1.3) (2019-01-17)


### Bug Fixes

* **deps:** bump [@ovh-ux](https://github.com/ovh-ux)/ng-ovh-contracts dependency ([5cdfb1a](https://github.com/ovh-ux/manager/commit/5cdfb1a))



## [0.1.2](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@0.1.1...@ovh-ux/manager-sms@0.1.2) (2019-01-17)


### Bug Fixes

* use new component to display contracts ([f0e0a1b](https://github.com/ovh-ux/manager/commit/f0e0a1b))



## [0.1.1](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@0.1.0...@ovh-ux/manager-sms@0.1.1) (2019-01-10)



# [0.1.0](https://github.com/ovh-ux/manager/compare/@ovh-ux/manager-sms@0.0.0...@ovh-ux/manager-sms@0.1.0) (2019-01-03)


### Bug Fixes

* rework imports to improve standalone modules ([9cdabab](https://github.com/ovh-ux/manager/commit/9cdabab))
* use [@ovh-ux](https://github.com/ovh-ux)/manager-telecom-styles ([d9d6f3f](https://github.com/ovh-ux/manager/commit/d9d6f3f))
* **i18n:** add missing translations ([fbdeac3](https://github.com/ovh-ux/manager/commit/fbdeac3))
* **sms.templates:** prevent long overflowing text on modal ([96ada20](https://github.com/ovh-ux/manager/commit/96ada20)), closes [ovh-ux/ovh-manager-telecom#121](https://github.com/ovh-ux/ovh-manager-telecom/issues/121)
* **sms.users:** fix necessary double click on cancel button ([fd3c662](https://github.com/ovh-ux/manager/commit/fd3c662))


### Features

* **app:** add standalone app for SMS ([157a745](https://github.com/ovh-ux/manager/commit/157a745))
* **manager-sms:** initial module import ([9aac091](https://github.com/ovh-ux/manager/commit/9aac091))



