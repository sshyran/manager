# ng-uirouter-layout

> Support layout:modal when using ui-router

[![Downloads](https://badgen.net/npm/dt/@ovh-ux/ng-uirouter-layout)](https://npmjs.com/package/@ovh-ux/ng-uirouter-layout) [![Dependencies](https://badgen.net/david/dep/ovh-ux/manager/packages/components/ng-uirouter-layout)](https://npmjs.com/package/@ovh-ux/ng-uirouter-layout?activeTab=dependencies) [![Dev Dependencies](https://badgen.net/david/dev/ovh-ux/manager/packages/components/ng-uirouter-layout)](https://npmjs.com/package/@ovh-ux/ng-uirouter-layout?activeTab=dependencies) [![Gitter](https://badgen.net/badge/gitter/ovh-ux/blue?icon=gitter)](https://gitter.im/ovh/ux)

## Install

```sh
yarn add @ovh-ux/ng-uirouter-layout
```
## Usage

```js
// index.js
import angular from 'angular';
import ngUiRouterLayout from '@ovh-ux/ng-uirouter-layout';

angular
  .module('myApp', [
    ngUiRouterLayout,
  ]);
```

### With controller and template

```js
// routing.js
import controller from './controller';
import template from './template.html';
...

  $stateProvider
    .state('state.name', {
      url,
      views: {
        modal: {
          controller,
          template
        },
      },
      layout: 'modal',
    });
```

### With component

```js
// routing.js
  $stateProvider
    .state('state.name', {
      url,
      views: {
        modal: {
          component: 'awesomeModal',
        },
      },
      layout: 'modal',
    });
```

### With a component provider

```js
// routing.js
  $stateProvider
    .state('state.name', {
      url,
      views: {
        modal: {
          componentProvider: 
            predicate => predicate 
              ? 'awesomeModalForTruePredicate' 
              : 'awesomeModalForFalsePredicate',
        },
      },
      layout: 'modal',
    });
```

## Contributing

Always feel free to help out! Whether it's [filing bugs and feature requests](https://github.com/ovh-ux/manager/issues/new) or working on some of the [open issues](https://github.com/ovh-ux/manager/issues), our [contributing guide](CONTRIBUTING.md) will help get you started.

## License

[BSD-3-Clause](LICENSE) © OVH SAS
