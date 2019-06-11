import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';
import get from 'lodash/get';
import { WEB } from './constants';

export const DOMAIN_CONFIG = {
  id: 'domains',
  loadOnState: 'app.domain',
  children: [
    {
      id: 'domain_all',
      state: 'app.domain.all',
      stateUrl: '#/configuration/domains',
      icon: 'ovh-font ovh-font-network',
      app: [WEB],
    },
    {
      id: 'domain_operations',
      state: 'app.domain.operation',
      stateUrl: '#/configuration/domains_operations',
      icon: 'ovh-font ovh-font-config',
      app: [WEB],
    },
  ],
  types: [
    {
      path: '/allDom',
      category: 'ALLDOM',
      loadOnState: 'app.domain.alldom',
      stateParams: ['productId'],
      loadOnStateParams: ['allDom'],
      app: [WEB],
      icon: 'ovh-font ovh-font-domain',
      types: [
        {
          path: '/allDom/:productId/domain',
          category: 'ALLDOM',
          state: 'app.domain.alldom',
          stateParams: ['allDom', 'productId'],
          app: [WEB],
          icon: 'ovh-font ovh-font-domain',
        },
      ],
    },
    {
      path: '/domain',
      category: 'DOMAIN',
      state: 'app.domain.product',
      stateParams: ['productId'],
      icon: 'ovh-font ovh-font-domain',
      app: [WEB],
      exclude: 'parentService.type:eq=/allDom',
    },
    {
      path: '/domain/zone',
      category: 'ZONE',
      state: 'app.domain.dns-zone',
      stateParams: ['productId'],
      icon: 'oui-icon icon-white-background oui-icon-domain-dns',
      app: [WEB],
      filter: {
        category: 'DOMAIN', // eslint-disable-next-line max-len
        fn: (items, compareTo) => items.filter(it => isEmpty(find(get(compareTo, 'items', []), { serviceName: it.serviceName }))),
      },
    },
  ],
  icon: 'ovh-font ovh-font-domain',
  app: [WEB],
  regions: ['EU'],
};

export const HOSTING_CONFIG = {
  id: 'hostings',
  loadOnState: 'app.hosting',
  types: [
    {
      path: '/hosting/web',
      category: 'HOSTING',
      state: 'app.hosting',
      stateParams: ['productId'],
      icon: 'ovh-font ovh-font-server',
      app: [WEB],
    },
  ],
  icon: 'ovh-font ovh-font-hosting',
  app: [WEB],
  regions: ['EU'],
};

export const PRIVATE_DATABASE_CONFIG = {
  id: 'privateDatabases',
  loadOnState: 'app.private-database',
  types: [
    {
      path: '/hosting/privateDatabase',
      category: 'PRIVATE_DATABASE',
      state: 'app.private-database',
      stateParams: ['productId'],
      icon: 'ovh-font ovh-font-database',
      app: [WEB],
    },
  ],
  icon: 'ovh-font ovh-font-database',
  app: [WEB],
  regions: ['EU'],
};

export const EMAIL_PRO_CONFIG = {
  id: 'emailPros',
  loadOnState: 'app.email-pro',
  types: [
    {
      path: '/email/pro',
      category: 'EMAIL_PRO',
      state: 'app.email-pro',
      stateParams: ['productId'],
      icon: 'ovh-font ovh-font-mail',
      app: [WEB],
    },
  ],
  icon: 'ovh-font ovh-font-mail',
  app: [WEB],
  regions: ['EU'],
};

export const EMAIL_CONFIG = {
  id: 'emails',
  loadOnState: 'app.email.domain',
  types: [
    {
      path: '/email/domain',
      category: 'EMAIL_DOMAIN',
      state: 'app.email.domain',
      stateParams: ['productId'],
      icon: 'ovh-font ovh-font-mail',
      app: [WEB],
    },
    {
      path: '/email/mxplan',
      category: 'EMAIL_MXPLAN',
      state: 'app.email.mxplan',
      stateParams: ['productId'],
      loadOnState: 'app.email.mxplan',
      icon: 'ovh-font ovh-font-mail',
      app: [WEB],
    },
  ],
  icon: 'ovh-font ovh-font-mail',
  app: [WEB],
  regions: ['EU'],
};


export const MICROSOFT_CONFIG = {
  id: 'microsoft',
  children: [
    {
      id: 'exchange',
      types: [
        {
          path: '/email/exchange',
          icon: 'ms-Icon ms-Icon--ExchangeLogo',
          loadOnState: 'app.microsoft.exchange.*',
          loadOnStateParams: ['organization'],
          stateParams: ['organizationId'],
          app: [WEB],
          types: [
            {
              path: '/email/exchange/:organizationId/service',
              icon: 'ms-Icon ms-Icon--ExchangeLogo',
              getState: ({ offer }) => {
                const states = {
                  provider: 'app.microsoft.exchange.provider',
                  dedicated: 'app.microsoft.exchange.dedicated',
                  dedicatedCluster: 'app.microsoft.exchange.dedicatedCluster',
                  hosted: 'app.microsoft.exchange.hosted',
                };

                return states[offer];
              },
              stateParams: ['organization', 'productId'],
              app: [WEB],
            },
          ],
        },
      ],
      loadOnState: 'app.microsoft.exchange',
      icon: 'ms-Icon ms-Icon--ExchangeLogo',
      app: [WEB],
    },
    {
      id: 'office',
      types: [
        {
          path: '/license/office',
          icon: 'ms-Icon ms-Icon--OfficeLogo',
          state: 'app.microsoft.office.product',
          stateParams: ['serviceName'],
          app: [WEB],
        },
      ],
      loadOnState: 'app.microsoft.office',
      icon: 'ms-Icon ms-Icon--OfficeLogo',
      app: [WEB],
    },
    {
      id: 'sharepoint',
      types: [
        {
          path: '/msServices',
          icon: 'ms-Icon ms-Icon--SharepointLogo',
          loadOnState: 'app.microsoft.sharepoint.product',
          loadOnStateParams: ['exchangeId'],
          stateParams: ['organizationId'],
          app: [WEB],
          types: [
            {
              path: '/msServices/:organizationId/sharepoint',
              icon: 'ms-Icon ms-Icon--SharepointLogo',
              state: 'app.microsoft.sharepoint.product',
              stateParams: ['exchangeId', 'productId'],
              app: [WEB],
            },
          ],
        },
      ],
      loadOnState: 'app.microsoft.sharepoint',
      icon: 'ms-Icon ms-Icon--ExchangeLogo',
      app: [WEB],
    },
  ],
  loadOnState: 'app.microsoft',
  icon: 'ms-Icon ms-Icon--WindowsLogo',
  app: [WEB],
  regions: ['EU'],
};

/* export const MICROSOFT_CONFIG = {
  id: 'microsoft_exchange',
  types: [
    {
      path: '/email/exchange',
      icon: 'ms-Icon ms-Icon--ExchangeLogo',
      loadOnState: 'app.microsoft.exchange',
      stateParams: ['organization'],
      app: [WEB],
      types: [
        {
          path: '/email/exchange/:organization/service',
          icon: 'ms-Icon ms-Icon--ExchangeLogo',
          getState: ({ offer }) => {
            const states = {
              provider: 'app.microsoft.exchange.provider',
              dedicated: 'app.microsoft.exchange.dedicated',
              dedicatedCluster: 'app.microsoft.exchange.dedicatedCluster',
              hosted: 'app.microsoft.exchange.hosted',
            };

            return states[offer];
          },
          stateParams: ['organization', 'productId'],
          app: [WEB],
        },
      ],
    },
  ],
  loadOnState: 'app.microsoft.exchange',
  icon: 'ms-Icon ms-Icon--ExchangeLogo',
  app: [WEB],
  regions: ['CA'],
};
*/
export const WEB_SIDEBAR_CONFIG = [
  DOMAIN_CONFIG,
  HOSTING_CONFIG,
  PRIVATE_DATABASE_CONFIG,
  EMAIL_PRO_CONFIG,
  EMAIL_CONFIG,
  MICROSOFT_CONFIG,
];
export const WEB_ORDER_SIDEBAR_CONFIG = [
  {
    id: 'orderDomain',
    title: 'domain',
    icon: 'ovh-font ovh-font-domain',
    linkId: 'orderDomain',
    target: '_blank',
    app: [WEB],
    regions: ['EU'],
  },
  {
    id: 'orderZone',
    title: 'zone',
    icon: 'oui-icon oui-icon-domain-dns',
    state: 'app.dns-zone-new',
    regions: ['EU'],
    app: [WEB],
  },
  {
    id: 'orderPrivateDatabase',
    title: 'privateDatabase',
    icon: 'ovh-font ovh-font-database',
    state: 'app.sql-order',
    regions: ['EU'],
    app: [WEB],
  },
  {
    id: 'orderHosting',
    title: 'hosting',
    icon: 'ovh-font ovh-font-hosting',
    linkId: 'orderHosting',
    target: '_blank',
    app: [WEB],
    regions: ['EU'],
  },
  {
    id: 'orderCloudWeb',
    title: 'cloudWeb',
    icon: 'ovh-font ovh-font-hosting',
    linkId: 'orderCloudWeb',
    target: '_blank',
    app: [WEB],
    regions: ['EU'],
  },
  {
    id: 'orderEmailPro',
    title: 'emailPro',
    icon: 'ovh-font ovh-font-mail',
    linkId: 'orderEmailPro',
    target: '_blank',
    app: [WEB],
    regions: ['EU'],
  },
  {
    id: 'orderMXPlan',
    title: 'mxplan',
    icon: 'ovh-font ovh-font-mail',
    state: 'app.mx-plan',
    regions: ['EU'],
    app: [WEB],
  },
  {
    id: 'orderExchange',
    title: 'exchange',
    icon: 'ms-Icon ms-Icon--ExchangeLogo',
    state: 'app.microsoft.exchange.order',
    regions: ['EU'],
    app: [WEB],
  },
  {
    id: 'orderOffice',
    title: 'office',
    icon: 'ms-Icon ms-Icon--OfficeLogo',
    linkId: 'orderOffice',
    target: '_blank',
    app: [WEB],
    regions: ['EU'],
  },
  {
    id: 'orderCsp2',
    title: 'csp2',
    icon: 'ms-Icon ms-Icon--OfficeLogo',
    linkId: 'orderCsp2',
    target: '_blank',
    app: [WEB],
    regions: ['EU'],
  },
  {
    id: 'orderSharepoint',
    title: 'sharepoint',
    icon: 'ms-Icon ms-Icon--SharepointLogo',
    state: 'app.microsoft.sharepoint.order',
    regions: ['EU'],
    app: [WEB],
  },
];

export default { WEB_SIDEBAR_CONFIG, WEB_ORDER_SIDEBAR_CONFIG };
