export default class TicketService {
  /* @ngInject */
  constructor(
    OvhApiSupport,
  ) {
    this.OvhApiSupport = OvhApiSupport;
  }

  fetchTicket({ ticket, ticketId }) {
    return ticket || this.OvhApiSupport.v6()
      .get({ id: ticketId }).$promise;
  }

  fetchMessages({ messages, ticketId }) {
    return messages || this.OvhApiSupport.v6()
      .getMessages({ id: ticketId }).$promise;
  }
}
