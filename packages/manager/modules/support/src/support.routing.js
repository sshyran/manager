export const state = {
  abstract: true,
  name: 'support',
  redirectTo: 'support.tickets',
  translations: {
    format: 'json',
    value: [
      '.',
    ],
  },
  url: '/support',
};

export const registerState = /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(state.name, state);
};

export default {
  registerState,
  state,
};
