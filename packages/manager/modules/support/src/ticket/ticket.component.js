import template from './ticket.html';

export default {
  bindings: {
    goToTickets: '<',
    messages: '<',
    ticket: '<',
    tickets: '<?',
    translateTicketSender: '<',
    translateTicketState: '<',
  },
  name: 'supportTicket',
  template,
};
