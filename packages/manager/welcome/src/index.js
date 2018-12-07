import angular from 'angular';
import '@uirouter/angularjs';
import ocLazyLoad from 'oclazyload';
import react from 'react';
import reactDom from 'react-dom';

import './manager-welcome.less';
import routing from './manager-welcome.routes';

const moduleName = 'ovhManagerWelcome';

angular.module(moduleName, [
  ocLazyLoad,
  'ui.router',
]).config(routing);

/**
 * An attempt to wrap a React component inside AngularJS directive
 */
angular.module(moduleName).directive('reactComponent', /* @ngInject */ $timeout => ({
  template: '<div></div>',
  scope: {
    component: '=',
    bindings: '=',
    props: '=',
  },
  link: function link(scope, element) {
    const reactBindings = {};
    Object.keys(scope.bindings || {}).forEach((key) => {
      const callback = scope.bindings[key];
      reactBindings[key] = (...args) => {
        // synthetic React events needs to be persisted
        args.forEach((a) => {
          if (a.persist) {
            a.persist();
          }
        });
        // execute callback in AngularJS event loop
        $timeout(() => {
          callback(...args);
        });
      };
    });

    Object.keys(scope.props || {}).forEach((key) => {
      reactBindings[key] = scope.props[key];
    });

    // unmount React when scope is destroyed
    scope.$on('$destroy', () => {
      reactDom.unmountComponentAtNode(element[0]);
    });

    // render React component
    reactDom.render(react.createElement(scope.component, reactBindings, null), element[0]);
  },
}));

export default moduleName;
