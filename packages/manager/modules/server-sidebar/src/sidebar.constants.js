import { DEDICATED, CLOUD } from './constants';

export const DEDICATED_SERVER_CONFIG = {
  id: 'dedicatedServers',
  loadOnState: 'app.dedicated',
  types: [
    {
      path: '/dedicated/housing',
      category: 'HOUSING',
      state: 'app.dedicated.housing',
      stateParams: ['productId'],
      app: [DEDICATED],
      searchKeys: ['HOUSING'],
    },
    {
      path: '/dedicated/server',
      category: 'SERVER',
      state: 'app.dedicated.server',
      stateParams: ['productId'],
      app: [DEDICATED],
      searchKeys: ['SERVER'],
    },
  ],
  icon: 'ovh-font ovh-font-server',
  app: [DEDICATED],
  regions: ['EU', 'CA', 'US'],
};

export const DEDICATED_CLOUD_CONFIG = {
  id: 'dedicatedClouds',
  types: [
    {
      path: '/dedicatedCloud',
      types: [
        {
          path: '/dedicatedCloud/:productId/datacenter',
          state: 'app.dedicatedClouds.datacenter',
          stateParams: [
            'productId',
            'datacenterId',
          ],
          app: [DEDICATED],
        },
      ],
      state: 'app.dedicatedClouds',
      stateParams: ['productId'],
      icon: 'ovh-font ovh-font-dedicatedCloud',
      app: [DEDICATED],
    },
  ],
  loadOnState: 'app.dedicatedClouds',
  icon: 'ovh-font ovh-font-dedicatedCloud',
  app: [DEDICATED],
  regions: ['EU', 'CA', 'US'],
};

export const NETWORKS_CONFIG = {
  id: 'networks',
  types: [
    {
      path: '/cdn/dedicated',
      types: [
        {
          path: '/cdn/dedicated/:productId/domains',
          state: 'app.networks.cdn.dedicated.domain',
          stateParams: [
            'productId',
            'domain',
          ],
          app: [DEDICATED],
          regions: ['EU'],
        },
      ],
      state: 'app.networks.cdn.dedicated',
      stateParams: ['productId'],
      icon: 'ovh-font ovh-font-cdn',
      app: [DEDICATED],
      regions: ['EU'],
      searchKeys: ['Content Delivery Network'],
    },
    {
      path: '/dedicated/nas',
      state: 'app.networks.nas.details',
      stateParams: ['nasId'],
      icon: 'ovh-font ovh-font-cloudnas',
      app: [DEDICATED],
      regions: ['EU', 'CA'],
      searchKeys: ['NAS'],
    },
    {
      path: '/dedicated/nasha',
      state: 'app.networks.nas.details',
      stateParams: ['nasId'],
      stateParamsTransformer: params => ({
        ...params,
        nasType: 'nas',
        nasId: `nasha_${params.nasId}`,
      }),
      icon: 'ovh-font ovh-font-cloudnas',
      app: [DEDICATED],
      regions: ['EU', 'CA'],
      searchKeys: ['NAS', 'NASHA', 'NAS-HA'],
    },
  ],
  loadOnState: 'app.networks',
  icon: 'ovh-font ovh-font-network',
  app: [DEDICATED],
  regions: ['EU', 'CA'],
};

export const OLD_MICROSOFT_CONFIG = {
  id: 'microsoft',
  children: [
    {
      id: 'exchange',
      types: [
        {
          path: '/email/exchange',
          icon: 'ms-Icon ms-Icon--ExchangeLogo',
          loadOnState: 'app.microsoft.exchange',
          stateParams: ['organizationId'],
          app: [DEDICATED],
          types: [
            {
              path: '/email/exchange/:organizationId/service',
              icon: 'ms-Icon ms-Icon--ExchangeLogo',
              state: 'app.microsoft.exchange',
              stateParams: ['organizationId', 'productId'], // TODO: state
              app: [DEDICATED],
            },
          ],
        },
      ],
      loadOnState: 'app.microsoft.exchange',
      icon: 'ms-Icon ms-Icon--ExchangeLogo',
      app: [DEDICATED],
    },
  ],
  forceDisplaySearch: true,
  loadOnState: 'app.microsoft',
  icon: 'ms-Icon ms-Icon--WindowsLogo',
  app: [DEDICATED],
  regions: ['CA'],
};

export const MICROSOFT_CONFIG = {
  id: 'microsoft_exchange',
  types: [
    {
      path: '/email/exchange',
      icon: 'ms-Icon ms-Icon--ExchangeLogo',
      loadOnState: 'app.microsoft.exchange',
      stateParams: ['organization'],
      app: [DEDICATED],
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
          app: [DEDICATED],
        },
      ],
    },
  ],
  loadOnState: 'app.microsoft.exchange',
  icon: 'ms-Icon ms-Icon--ExchangeLogo',
  app: [DEDICATED],
  regions: ['CA'],
};

export const LICENCE_CONFIG = {
  id: 'licences',
  state: 'app.license.dashboard',
  icon: 'ovh-font ovh-font-certificate',
  stateUrl: '#/configuration/license?landingTo=licences',
  app: [DEDICATED],
  regions: ['EU', 'CA', 'US'],
};

export const IP_CONFIG = {
  id: 'ip',
  state: 'app.ip',
  stateUrl: '#/configuration/ip?landingTo=ip',
  icon: 'ovh-font ovh-font-ip',
  app: [DEDICATED],
  regions: ['EU', 'CA', 'US'],
};

export const IAAS_CONFIG = {
  id: 'vps',
  loadOnState: 'iaas',
  types: [
    {
      path: '/vps',
      state: 'iaas.vps.detail.dashboard',
      stateParams: ['serviceName'],
      loadOnState: 'iaas.vps.detail',
      icon: 'ovh-font ovh-font-vps',
      app: [CLOUD],
      searchKeys: ['VPS'],
    },
  ],
  icon: 'ovh-font ovh-font-cloud-root',
  app: [CLOUD],
  regions: ['EU', 'CA'],
};

export const PAAS_CONFIG = {
  id: 'paas',
  loadOnState: 'paas',
  types: [
    {
      path: '/dedicated/ceph',
      state: 'paas.cda.cda-details.cda-details-home',
      stateParams: ['serviceName'],
      icon: 'ovh-font ovh-font-cloud-disk-array',
      app: [CLOUD],
      regions: ['EU', 'CA'],
      searchKeys: ['Cloud Disk Array', 'CDA'],
    },
    {
      path: '/veeamCloudConnect',
      state: 'paas.veeam.detail.dashboard',
      stateParams: ['serviceName'],
      loadOnState: 'paas.veeam.detail',
      icon: 'ovh-font ovh-font-veeam',
      app: [CLOUD],
      regions: ['EU', 'CA'],
      searchKeys: ['Veeam Cloud Connect', 'VEEAM'],
    },
    {
      path: '/veeam/veeamEnterprise',
      state: 'paas.veeam-enterprise.dashboard',
      stateParams: ['serviceName'],
      icon: 'ovh-font ovh-font-veeam',
      app: [CLOUD],
      regions: ['EU'],
      searchKeys: ['Veeam Enterprise', 'VEEAM_ENTERPRISE'],
    },
  ],
  icon: 'ovh-font ovh-font-cloud-package',
  app: [CLOUD],
  regions: ['EU', 'CA'],
};

export const METRICS_CONFIG = {
  id: 'metrics',
  loadOnState: 'dbaas.metrics',
  types: [
    {
      path: '/metrics',
      state: 'dbaas.metrics.detail.dashboard',
      stateParams: ['serviceName'],
      icon: 'ovh-font ovh-font-graph',
      app: [CLOUD],
      searchKeys: ['IOT', 'Metrics', 'Monitoring', 'Time Series', 'TimeSeries'],
    },
  ],
  icon: 'ovh-font ovh-font-graph',
  app: [CLOUD],
  regions: ['EU'],
};

export const LOGS_CONFIG = {
  id: 'logs',
  loadOnState: 'dbaas.logs',
  types: [
    {
      path: '/dbaas/logs',
      state: 'dbaas.logs.detail',
      stateParams: ['serviceName'],
      app: [CLOUD],
    },
  ],
  children: [
    {
      id: 'logs_all_accounts',
      state: 'dbaas.logs',
      stateUrl: '#/dbaas/logs/list',
      app: [CLOUD],
    },
  ],
  icon: 'fa fa-bar-chart',
  app: [CLOUD],
  regions: ['EU'],
};

export const IPLB_CONFIG = {
  id: 'load_balancer',
  loadOnState: 'network.iplb',
  types: [
    {
      path: '/ipLoadbalancing',
      state: 'network.iplb.detail.home',
      stateParams: ['serviceName'],
      icon: 'ovh-font ovh-font-iplb',
      app: [CLOUD],
      searchKeys: ['IP Load Balancer', 'IPLB'],
    },
  ],
  icon: 'ovh-font ovh-font-iplb',
  app: [CLOUD],
  regions: ['EU', 'CA'],
};

export const VRACK_CONFIG = {
  id: 'vrack',
  loadOnState: 'vrack',
  types: [
    {
      path: '/vrack',
      state: 'vrack',
      stateParams: ['vrackId'],
      app: [CLOUD],
    },
  ],
  icon: 'ovh-font ovh-font-vRack',
  app: [CLOUD],
  regions: ['EU', 'CA', 'US'],
};

export const CLOUD_DESKTOP_CONFIG = {
  id: 'cloud_desktop',
  loadOnState: 'deskaas',
  types: [
    {
      path: '/deskaas',
      state: 'deskaas.details',
      stateParams: ['serviceName'],
      icon: 'ovh-font ovh-font-cloud-desktop',
      app: [CLOUD],
      searchKeys: ['Cloud Desktop', 'deskaas', 'vdi'],
    },
  ],
  icon: 'ovh-font ovh-font-cloud-desktop',
  app: [CLOUD],
  regions: ['EU'],
};

export const SIDEBAR_CONFIG = [
  DEDICATED_SERVER_CONFIG,
  DEDICATED_CLOUD_CONFIG,
  NETWORKS_CONFIG,

  // CLOUD IMPORT
  IAAS_CONFIG,
  PAAS_CONFIG,
  METRICS_CONFIG,
  LOGS_CONFIG,
  IPLB_CONFIG,
  VRACK_CONFIG,
  CLOUD_DESKTOP_CONFIG,

  // DEDICATED END
  MICROSOFT_CONFIG,
  LICENCE_CONFIG,
  IP_CONFIG,
];

export default { SIDEBAR_CONFIG };
