import { DEDICATED, CLOUD, MANAGER_URLS } from './constants';

export const ORDER_URLS = {
  EU: {
    ...MANAGER_URLS.EU,
    dedicated_cloud: {
      CZ: 'https://www.ovh.cz/dedicated-cloud/',
      DE: 'https://www.ovh.de/dedicated-cloud/',
      ES: 'https://www.ovh.es/dedicated-cloud/',
      FI: 'https://www.ovh-hosting.fi/dedicated-cloud/',
      FR: 'https://www.ovh.com/fr/dedicated-cloud/',
      GB: 'https://www.ovh.co.uk/dedicated-cloud/',
      IE: 'https://www.ovh.ie/dedicated-cloud/',
      IT: 'https://www.ovh.it/dedicated-cloud/',
      LT: 'https://www.ovh.lt/dedicated-cloud/',
      MA: 'https://www.ovh.ma/dedicated-cloud/',
      NL: 'https://www.ovh.nl/dedicated-cloud/',
      PL: 'https://www.ovh.pl/dedicated-cloud/',
      PT: 'https://www.ovh.pt/dedicated-cloud/',
      SN: 'https://www.ovh.sn/dedicated-cloud/',
      TN: 'https://www.ovh.com/tn/dedicated-cloud/',
    },
    vrack: {
      CZ: 'https://www.ovh.cz/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      DE: 'https://www.ovh.de/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      ES: 'https://www.ovh.es/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      FI: 'https://www.ovh-hosting.fi/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      FR: 'https://www.ovh.com/fr/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      GB: 'https://www.ovh.co.uk/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      IE: 'https://www.ovh.ie/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      IT: 'https://www.ovh.it/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      LT: 'https://www.ovh.lt/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      MA: 'https://www.ovh.ma/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      NL: 'https://www.ovh.nl/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      PL: 'https://www.ovh.pl/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      PT: 'https://www.ovh.pt/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      SN: 'https://www.ovh.sn/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      TN: 'https://www.ovh.com/tn/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
    },
    cloud_disk_array: {
      FR: 'https://www.ovh.com/fr/cloud/cloud-disk-array/',
    },
    veeam: {
      FR: 'https://www.ovh.com/fr/storage-solutions/veeam-cloud-connect/',
    },
    veeam_enterprise: {
      DE: 'https://www.ovh.de/storage-solutions/veeam-enterprise.xml',
      ES: 'https://www.ovh.es/storage-solutions/veeam-enterprise.xml',
      FR: 'https://www.ovh.com/fr/storage-solutions/veeam-enterprise.xml',
      GB: 'https://www.ovh.co.uk/storage-solutions/veeam-enterprise.xml',
      IT: 'https://www.ovh.it/storage-solutions/veeam-enterprise.xml',
      NL: 'https://www.ovh.nl/storage-solutions/veeam-enterprise.xml',
      PL: 'https://www.ovh.pl/storage-solutions/veeam-enterprise.xml',
      PT: 'https://www.ovh.pt/storage-solutions/veeam-enterprise.xml',
    },
    dbaas: {
      FR: 'https://www.ovh.com/fr/dbaas/timeseries/',
    },
    cloud_desktop: {
      CZ: 'https://www.ovh.cz/cloud/cloud-desktop/',
      DE: 'https://www.ovh.de/cloud/cloud-desktop/',
      ES: 'https://www.ovh.es/cloud/cloud-desktop/',
      FI: 'https://www.ovh-hosting.fi/cloud/cloud-desktop/',
      FR: 'https://www.ovh.com/fr/cloud/cloud-desktop/',
      GB: 'https://www.ovh.co.uk/cloud/cloud-desktop/',
      IE: 'https://www.ovh.ie/cloud/cloud-desktop/',
      IT: 'https://www.ovh.it/cloud/cloud-desktop/',
      LT: 'https://www.ovh.lt/cloud/cloud-desktop/',
      MA: 'https://www.ovh.ma/cloud/cloud-desktop/',
      NL: 'https://www.ovh.nl/cloud/cloud-desktop/',
      PL: 'https://www.ovh.pl/cloud/cloud-desktop/',
      PT: 'https://www.ovh.pt/cloud/cloud-desktop/',
      SN: 'https://www.ovh.sn/cloud/cloud-desktop/',
      TN: 'https://www.ovh.com/tn/cloud/cloud-desktop/',
    },
    load_balancer: {
      CZ: 'https://www.ovh.cz/reseni/ip-load-balancing/',
      DE: 'https://www.ovh.de/loesungen/ip-load-balancing/',
      ES: 'https://www.ovh.es/soluciones/ip-load-balancing/',
      FI: 'https://www.ovh-hosting.fi/ratkaisut/ip-load-balancing/',
      FR: 'https://www.ovh.com/fr/solutions/ip-load-balancing/',
      GB: 'https://www.ovh.co.uk/solutions/ip-load-balancing/',
      IE: 'https://www.ovh.ie/solutions/ip-load-balancing/',
      IT: 'https://www.ovh.it/soluzioni/ip-load-balancing/',
      LT: 'https://www.ovh.lt/sprendimai/ip-load-balancing/',
      MA: 'https://www.ovh.ma/solutions/ip-load-balancing/',
      NL: 'https://www.ovh.nl/oplossing/ip-load-balancing/',
      PL: 'https://www.ovh.pl/rozwiazania/ip-load-balancing/',
      PT: 'https://www.ovh.pt/solucoes/ip-load-balancing/',
      SN: 'https://www.ovh.sn/solutions/ip-load-balancing/',
      TN: 'https://www.ovh.com/tn/solutions/ip-load-balancing/',
    },
    dedicatedOrder: {
      CZ: 'https://www.ovh.cz/dedikovane_servery',
      DE: 'https://www.ovh.de/dedicated_server',
      ES: 'https://www.ovh.es/servidores_dedicados',
      FI: 'https://www.ovh-hosting.fi/dedikoidut_palvelimet',
      FR: 'https://www.ovh.com/fr/serveurs_dedies',
      GB: 'https://www.ovh.co.uk/dedicated_servers',
      IE: 'https://www.ovh.ie/dedicated_servers',
      IT: 'https://www.ovh.it/server_dedicati',
      LT: 'https://www.ovh.lt/dedikuoti_serveriai',
      NL: 'https://www.ovh.nl/dedicated_servers',
      PL: 'https://www.ovh.pl/serwery_dedykowane',
      PT: 'https://www.ovh.pt/servidores_dedicados',
    },
    express_review_base: {
      CZ: 'https://www.ovh.cz/order/express/#/express/review',
      DE: 'https://www.ovh.de/order/express/#/express/review',
      ES: 'https://www.ovh.es/order/express/#/express/review',
      FI: 'https://www.ovh-hosting.fi/order/express/#/express/review',
      FR: 'https://www.ovh.com/fr/order/express/#/express/review',
      GB: 'https://www.ovh.co.uk/order/express/#/express/review',
      IE: 'https://www.ovh.ie/order/express/#/express/review',
      IT: 'https://www.ovh.it/order/express/#/express/review',
      LT: 'https://www.ovh.lt/order/express/#/express/review',
      NL: 'https://www.ovh.nl/order/express/#/express/review',
      PL: 'https://www.ovh.pl/order/express/#/express/review',
      PT: 'https://www.ovh.pt/order/express/#/express/review',
      MA: 'https://www.ovh.ma/order/express/#/express/review',
      SN: 'https://www.ovh.sn/order/express/#/express/review',
      TN: 'https://www.ovh.com/tn/order/express/#/express/review',
    },
    vps: {
      CZ: 'https://www.ovh.cz/vps/',
      DE: 'https://www.ovh.de/virtual_server/',
      ES: 'https://www.ovh.es/vps/',
      FI: 'https://www.ovh-hosting.fi/vps/',
      FR: 'https://www.ovh.com/fr/vps/',
      GB: 'https://www.ovh.co.uk/vps/',
      IE: 'https://www.ovh.ie/vps/',
      IT: 'https://www.ovh.it/vps/',
      LT: 'https://www.ovh.lt/vps/',
      NL: 'https://www.ovh.nl/vps/',
      PL: 'https://www.ovh.pl/vps/',
      PT: 'https://www.ovh.pt/vps/',
      MA: 'https://www.ovh.ma/vps/',
      SN: 'https://www.ovh.sn/vps/',
      TN: 'https://www.ovh.com/tn/vps/',
    },
    cloudProjectOrder: {
      FR: 'https://www.ovh.com/manager/cloud/#/iaas/pci/project/new',
    },
    publicCloudProjectOrder: {
      FR: 'https://www.ovh.com/manager/public-cloud/#!/pci/projects/new',
    },
    publicCloudKubernetes: {
      FR: 'https://www.ovh.com/manager/public-cloud/#!/pci/projects/default/kubernetes/new',
    },
    orderSql: {
      FR: 'https://www.ovh.com/manager/web/#/configuration/sql_order?orderType=dbaas',
    },
    orderDomain: {
      CZ: 'https://www.ovh.cz/cgi-bin/newOrder/order.cgi',
      DE: 'https://www.ovh.de/order/domain/',
      ES: 'https://www.ovh.es/order/domain/',
      FI: 'https://www.ovh-hosting.fi/cgi-bin/newOrder/order.cgi',
      FR: 'https://www.ovh.com/fr/order/domain/',
      GB: 'https://www.ovh.co.uk/order/domain',
      IE: 'https://www.ovh.ie/order/domain',
      IT: 'https://www.ovh.it/order/domain/',
      LT: 'https://www.ovh.lt/order/domain/',
      NL: 'https://www.ovh.nl/order/domain/',
      PL: 'https://www.ovh.pl/order/domain/',
      PT: 'https://www.ovh.pt/order/domain/',
    },
    orderHosting: {
      CA: 'https://www.ovh.com/ca/en/',
      CZ: 'https://www.ovh.cz/webhosting/',
      DE: 'https://www.ovh.de/hosting/',
      EN: 'https://www.ovh.co.uk/web-hosting/',
      ES: 'https://www.ovh.es/hosting/',
      FI: 'https://www.ovh-hosting.fi/webhotelli/',
      FR: 'https://www.ovh.com/fr/hebergement-web/',
      GB: 'https://www.ovh.co.uk/web-hosting/',
      IE: 'https://www.ovh.ie/web-hosting/',
      IT: 'https://www.ovh.it/hosting-web/',
      LT: 'https://www.ovh.lt/svetainiu-talpinimas/',
      MA: 'https://www.ovh.com/ma/hebergement-web/',
      NL: 'https://www.ovh.nl/shared-hosting/',
      PL: 'https://www.ovh.pl/hosting/',
      PT: 'https://www.ovh.pt/alojamento-partilhado/',
      QC: 'https://www.ovh.com/ca/fr/',
      RU: 'https://www.ovh.ie/web-hosting/',
      SN: 'https://www.ovh.sn/hebergement-web/',
      TN: 'https://www.ovh.com/tn/hebergement-web/',
      WE: 'http://www.ovh.com/us/',
    },
    orderCloudWeb: {
      CZ: 'https://www.ovh.cz/webhosting/cloud-web.xml',
      DE: 'https://www.ovh.de/hosting/cloud-web.xml',
      EN: 'https://www.ovh.co.uk/web-hosting/cloud-web.xml',
      ES: 'https://www.ovh.es/hosting/cloud-web.xml',
      FI: 'https://www.ovh-hosting.fi/webhotelli/cloud-web.xml',
      FR: 'https://www.ovh.com/fr/hebergement-web/cloud-web.xml',
      GB: 'https://www.ovh.co.uk/web-hosting/cloud-web.xml',
      IE: 'https://www.ovh.ie/web-hosting/cloud-web.xml',
      IT: 'https://www.ovh.it/hosting-web/cloud-web.xml',
      LT: 'https://www.ovh.lt/svetainiu-talpinimas/cloud-web.xml',
      MA: 'https://www.ovh.com/ma/hebergement-web/cloud-web.xml',
      NL: 'https://www.ovh.nl/shared-hosting/cloud-web.xml',
      PL: 'https://www.ovh.pl/hosting/cloud-web.xml',
      PT: 'https://www.ovh.pt/alojamento-partilhado/cloud-web.xml',
      SN: 'https://www.ovh.sn/hebergement-web/cloud-web.xml',
      TN: 'https://www.ovh.com/tn/hebergement-web/cloud-web.xml',
    },
    orderEmailPro: {
      CZ: 'https://www.ovh.cz/emails/email-pro/',
      DE: 'https://www.ovh.de/emails/email-pro/',
      ES: 'https://www.ovh.es/emails/email-pro/',
      FI: 'https://www.ovh-hosting.fi/sahkopostit/email-pro/',
      FR: 'https://www.ovh.com/fr/emails/email-pro/',
      GB: 'https://www.ovh.co.uk/emails/email-pro/',
      IT: 'https://www.ovh.it/emails/email-pro/',
      LT: 'https://www.ovh.lt/El_pastas/email-pro/',
      NL: 'https://www.ovh.nl/emails/email-pro/',
      PL: 'https://www.ovh.pl/emaile/email-pro/',
      PT: 'https://www.ovh.pt/emails/email-pro/',
    },
    orderOffice: {
      CZ: 'https://www.ovh.cz/office-365/',
      DE: 'https://www.ovh.de/office-365/',
      ES: 'https://www.ovh.es/office-365/',
      FI: 'https://www.ovh-hosting.fi/office-365/',
      FR: 'https://www.ovh.com/fr/office-365/',
      GB: 'https://www.ovh.co.uk/office-365/',
      IT: 'https://www.ovh.it/office-365/',
      LT: 'https://www.ovh.lt/office-365/',
      NL: 'https://www.ovh.nl/office-365/',
      PL: 'https://www.ovh.pl/office-365/',
      PT: 'https://www.ovh.pt/office-365/',
    },
    orderCsp2: {
      CZ: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      DE: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      ES: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      FI: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      FR: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      GB: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      IT: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      LT: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      NL: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      PL: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
      PT: 'https://www.ovh.com/manager/sunrise/index.html#/csp2',
    },
  },
  CA: {
    ...MANAGER_URLS.CA,
    dedicated_cloud: {
      ASIA: 'https://www.ovh.com/asia/private-cloud/',
      AU: 'https://www.ovh.com.au/private-cloud/',
      CA: 'https://www.ovh.com/ca/en/dedicated-cloud/',
      QC: 'https://www.ovh.com/ca/fr/cloud-dedie/',
      SG: 'https://www.ovh.com/sg/private-cloud/',
      WE: 'https://www.ovh.com/us/dedicated-cloud/',
      WS: 'https://www.ovh.com/us/es/dedicated-cloud/',
    },
    cloud_disk_array: {
    },
    veeam: {
    },
    veeam_enterprise: {
      CA: 'https://www.ovh.com/ca/en/storage-solutions/veeam-enterprise.xml',
      QC: 'https://www.ovh.com/ca/fr/storage-solutions/veeam-enterprise.xml',
    },
    vrack: {
      ASIA: 'https://ca.ovh.com/asia/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      AU: 'https://ca.ovh.com/au/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      CA: 'https://ca.ovh.com/en/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      QC: 'https://ca.ovh.com/fr/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      SG: 'https://ca.ovh.com/sg/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      WE: 'https://us.ovh.com/us/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
      WS: 'https://us.ovh.com/es/order/express/#/new/express/resume?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
    },
    cloud_desktop: {},
    load_balancer: {
      ASIA: 'https://www.ovh.com/asia/solutions/ip-load-balancing/',
      AU: 'https://www.ovh.com.au/solutions/ip-load-balancing/',
      CA: 'https://www.ovh.com/ca/en/solutions/ip-load-balancing/',
      QC: 'https://www.ovh.com/ca/fr/solutions/ip-load-balancing/',
      SG: 'https://www.ovh.com/sg/solutions/ip-load-balancing/',
      WE: 'https://www.ovh.com/us/solutions/ip-load-balancing/',
      WS: 'https://www.ovh.com/us/es/soluciones/ip-load-balancing/',
    },
    dedicatedOrder: {
      ASIA: 'https://www.ovh.com/asia/dedicated-servers',
      AU: 'https://www.ovh.com.au/dedicated-servers',
      CA: 'https://www.ovh.com/ca/en/dedicated-servers',
      QC: 'https://www.ovh.com/ca/fr/serveurs-dedies',
      SG: 'https://www.ovh.com/sg/dedicated-servers',
      WE: 'https://www.ovh.com/world/dedicated-servers',
      WS: 'https://www.ovh.com/world/dedicated-servers',
    },
    cloudProjectOrder: {
      ASIA: 'https://ca.ovh.com/manager/cloud/index.html#/iaas/pci/project/new',
      AU: 'https://ca.ovh.com/manager/cloud/index.html#/iaas/pci/project/new',
      CA: 'https://ca.ovh.com/manager/cloud/index.html#/iaas/pci/project/new',
      QC: 'https://ca.ovh.com/manager/cloud/index.html#/iaas/pci/project/new',
      SG: 'https://ca.ovh.com/manager/cloud/index.html#/iaas/pci/project/new',
      WE: 'https://ca.ovh.com/manager/cloud/index.html#/iaas/pci/project/new',
      WS: 'https://ca.ovh.com/manager/cloud/index.html#/iaas/pci/project/new',
    },
    publicCloudProjectOrder: {
      ASIA: 'https://ca.ovh.com/manager/public-cloud/#!/pci/projects/new',
      AU: 'https://ca.ovh.com/manager/public-cloud/#!/pci/projects/new',
      CA: 'https://ca.ovh.com/manager/public-cloud/#!/pci/projects/new',
      QC: 'https://ca.ovh.com/manager/public-cloud/#!/pci/projects/new',
      SG: 'https://ca.ovh.com/manager/public-cloud/#!/pci/projects/new',
      WE: 'https://ca.ovh.com/manager/public-cloud/#!/pci/projects/new',
      WS: 'https://ca.ovh.com/manager/public-cloud/#!/pci/projects/new',
    },
    publicCloudKubernetes: {
    },
    express_review_base: {
      ASIA: 'https://ca.ovh.com/asia/order/express/#/express/review',
      AU: 'https://ca.ovh.com/au/order/express/#/express/review',
      CA: 'https://ca.ovh.com/en/order/express/#/express/review',
      QC: 'https://ca.ovh.com/fr/order/express/#/express/review',
      SG: 'https://ca.ovh.com/sg/order/express/#/express/review',
      WE: 'https://us.ovh.com/us/order/express/#/express/review',
      WS: 'https://us.ovh.com/es/order/express/#/express/review',
    },
    vps: {
      ASIA: 'https://www.ovh.com/asia/vps/',
      AU: 'https://www.ovh.com.au/vps/',
      CA: 'https://www.ovh.com/ca/en/vps/',
      QC: 'https://www.ovh.com/ca/fr/vps/',
      SG: 'https://www.ovh.com/sg/vps/',
      WE: 'https://www.ovh.com/us/vps/',
      WS: 'https://www.ovh.com/us/es/vps/',
    },
  },
  US: {
    ...MANAGER_URLS.US,
    dedicated_cloud: {
      US: 'https://us.ovhcloud.com/dedicated-cloud/',
    },
    cloud_disk_array: {
      US: 'https://us.ovhcloud.com/cloud/cloud-disk-array/',
    },
    veeam: {
    },
    veeam_enterprise: {
    },
    dbaas: {
      US: 'https://us.ovhcloud.com/dbaas/timeseries/',
    },
    vrack: {
      US: 'https://us.ovhcloud.com/order/express/#/express/review?products=~(~(planCode~\'vrack~quantity~1~productId~\'vrack))',
    },
    cloud_desktop: {
    },
    load_balancer: {
      US: 'https://us.ovhcloud.com/solutions/ip-load-balancing/',
    },
    dedicatedOrder: {
      US: 'https://us.ovhcloud.com/order/dedicated/#/dedicated/select',
    },
    cloudProjectOrder: {
      US: 'https://us.ovhcloud.com/manager/cloud/#/iaas/pci/offer',
    },
    publicCloudProjectOrder: {
      FR: 'https://us.ovhcloud.com/manager/public-cloud/#!/pci/projects/new',
    },
    publicCloudKubernetes: {
    },
    express_review_base: {
      US: 'https://us.ovhcloud.com/order/express/#/express/review',
    },
  },
};

export const SIDEBAR_ORDER_CONFIG = [
  {
    id: 'order-pci-project-new',
    title: 'cloud_project',
    icon: 'ovh-font ovh-font-public-cloud',
    linkId: 'publicCloudProjectOrder',
    app: [DEDICATED],
    regions: ['EU', 'CA', 'US'],
  },
  {
    id: 'order-nas',
    title: 'NAS',
    icon: 'ovh-font ovh-font-cloudnas',
    state: 'app.networks.nas.order', // TODO: SHOULD BE A LINK    DEDICATED #/configuration/nas
    linkId: 'DEDICATED',
    linkPart: '#/configuration/nas',
    app: [DEDICATED],
    regions: ['EU'],
  },
  {
    id: 'order-dedicated-server',
    title: 'dedicated_server',
    icon: 'ovh-font ovh-font-server',
    linkId: 'dedicatedOrder',
    target: '_blank',
    external: true,
    app: [DEDICATED],
    regions: ['EU', 'CA', 'US'],
  },
  {
    id: 'order-additional-ip',
    title: 'ip',
    icon: 'ovh-font ovh-font-ip',
    state: 'app.ip.agora-order',
    linkId: 'DEDICATED',
    linkPart: '#/configuration/ip?landingTo=ip&tab=ip',
    app: [DEDICATED],
    regions: ['EU', 'CA', 'US'],
  },
  {
    id: 'order-license',
    title: 'licence',
    icon: 'ovh-font ovh-font-certificate',
    state: 'app.license.order', // TODO: SHOULD BE A LINK DEDICATED #/configuration/license?landingTo=licences
    linkId: 'DEDICATED',
    linkPart: '#/configuration/license/order',
    app: [DEDICATED],
    regions: ['EU', 'CA', 'US'],
  },

  // CLOUD
  {
    id: 'order-kube',
    title: 'kube',
    icon: 'ovh-font ovh-font-kubernetes',
    linkId: 'publicCloudKubernetes',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: ['EU'],
  },
  {
    id: 'order-vps',
    title: 'vps',
    icon: 'ovh-font ovh-font-server2',
    linkId: 'vps',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: ['EU', 'CA'],
  },
  {
    id: 'order-private-cloud',
    title: 'dedicated_cloud',
    icon: 'ovh-font ovh-font-dedicatedCloud',
    linkId: 'dedicated_cloud',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: ['EU', 'CA'],
  },
  {
    id: 'order-cda',
    title: 'paas_cda',
    icon: 'ovh-font ovh-font-cloud-disk-array',
    linkId: 'cloud_disk_array',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: ['EU', 'CA'],
  },
  {
    id: 'order-nasha',
    title: 'NASHA',
    icon: 'ovh-font ovh-font-cloudnas',
    state: 'paas.nasha-add',
    linkId: 'CLOUD',
    linkPart: '#/paas/nasha/new',
    app: [CLOUD],
    regions: ['EU', 'CA'],
  },
  {
    id: 'order-veeam',
    title: 'paas_veeam',
    icon: 'ovh-font ovh-font-veeam',
    linkId: 'veeam',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: ['EU'],
  },
  {
    id: 'order-veeam-enterprise',
    title: 'paas_veeam_enterprise',
    icon: 'ovh-font ovh-font-veeam',
    linkId: 'veeam_enterprise',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: ['EU', 'CA'],
  },
  {
    id: 'order-metrics',
    title: 'dbaas_ts',
    icon: 'ovh-font ovh-font-graph',
    linkId: 'dbaas',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: ['EU'],
  },
  {
    id: 'order-vrack',
    title: 'vrack',
    icon: 'ovh-font ovh-font-vRack',
    linkId: 'vrack',
    target: '_blank',
    external: true,
    app: [DEDICATED],
    regions: ['EU', 'CA', 'US'],
  },
  {
    id: 'order-cloud-desktop',
    title: 'clouddesktop',
    icon: 'ovh-font ovh-font-cloud-desktop',
    linkId: 'cloud_desktop',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: ['EU', 'CA'],
  },
  {
    id: 'order-loadbalancer',
    title: 'iplb',
    icon: 'ovh-font ovh-font-ip',
    linkId: 'load_balancer',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: ['EU'],
  },
  {
    id: 'order-clouddb',
    title: 'clouddb',
    icon: 'ovh-font ovh-font-database',
    linkId: 'orderSql',
    target: '_blank',
    external: true,
    app: [CLOUD],
    regions: [],
  },
  {
    id: 'order-logs',
    title: 'logs',
    icon: 'fa fa-bar-chart',
    state: 'dbaas.logs.welcome',
    linkId: 'CLOUD',
    linkPart: '#/dbaas/logs/welcome',
    app: [CLOUD],
    regions: ['EU', 'CA'],
  },
];


export default { ORDER_URLS, SIDEBAR_ORDER_CONFIG };
