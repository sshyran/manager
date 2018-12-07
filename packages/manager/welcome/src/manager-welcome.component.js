import angular from 'angular';
import buttons from 'react-svg-buttons';
import Toggle from 'react-toggle';
import Cards from 'react-credit-cards';
import template from './manager-welcome.html';

export default angular
  .module('OvhManagerWelcomeComponent', [])
  .component('ovhManagerWelcomeComponent', {
    template,
    controller() {
      this.foo = 0;
      this.bar = false;
      this.react = {
        Button: buttons.PlusButton,
        Toggle,
        Cards,
      };

      this.creditCard = {
        number: '1111111111111111',
        name: 'foo',
        expiry: '10/10',
        cvc: 500,
        focused: 'name',
        issuer: 'visa',
        preview: true,
      };

      this.reactButtonClicked = () => {
        this.foo += 1;
      };

      this.reactToggleClicked = (e) => {
        this.bar = e.target.checked;
      };
    },
  });
