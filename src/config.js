const config = {
  'production': {
    RPC_NODES : [
      'https://apidev.blkcc.xyz',
    ],
    IMAGE_HOSTER : 'https://cdn.eftg.eu',
    ELASTIC : 'https://api.eftg.eu/pulsar/',
    CDN : 'https://cdn.eftg.eu/',
    SERVER_API: '/api/',
    EFTG_HARDFORK_0_1 : false,
    TAG_PRODUCT: 'aegis'
  },
  'acceptance': {
    RPC_NODES : [
      'https://api.blkcc.xyz'
    ],
    IMAGE_HOSTER : 'https://cdn.acc.blkcc.xyz',
    ELASTIC : 'https://api.blkcc.xyz/pulsar/',
    CDN : 'https://cdn.acc.blkcc.xyz/',
    SERVER_API: 'http://40.113.101.44:8084/api/',
    EFTG_HARDFORK_0_1 : false,
    TAG_PRODUCT: 'dev'
  },
  'development': {
    RPC_NODES : [
      'https://apidev.blkcc.xyz',
    ],
    IMAGE_HOSTER : 'https://cdn.dev.blkcc.xyz',
    ELASTIC : 'https://apidev.blkcc.xyz/pulsar/',
    CDN : 'https://cdn.dev.blkcc.xyz/',
    SERVER_API: 'http://pulsar.dev.blkcc.xyz:8084/api/',
    EFTG_HARDFORK_0_1 : true,
    TAG_PRODUCT: 'demo1'
    
  }
}

const environment = process.env.NODE_ENV || 'development';
const finalConfig = config[environment];

const SBD = 'EUR';
const STEEM = 'PULSE';
const SP = 'PULSE-Power';
const VESTS = 'VESTS';

const HARDFORK = 19

const EXPLORER = '/explorer/'
const DSTEEM_TIMEOUT = 5000 //ms

const STEEM_ADDRESS_PREFIX = 'EUR';
const STEEM_100_PERCENT = 10000;
const STEEM_VOTE_REGENERATION_SECONDS = 5 * 24 * 60 * 60;
const STEEM_INFLATION_RATE_START_PERCENT = 978;
const STEEM_INFLATION_NARROWING_PERIOD = 250000;
const STEEM_INFLATION_RATE_STOP_PERCENT = 95;
const STEEM_BLOCKS_PER_YEAR = (365 * 24 * 60 * 60) / 3;
const STEEM_BLOCKS_PER_DAY = (24 * 60 * 60) / 3;
const STEEM_SBD_START_PERCENT = 900;
const STEEM_SBD_STOP_PERCENT = 1000;
const STEEM_CHAIN_ID = '07c687c01f134adaf217a9b9367d1cef679c3c020167fdd25ee8c403f687528e'

const MAP = {
  TOP_WITNESSES: 30,
  INI_POS : [50.5, 15], //latitude, longitude
  INI_ZOOM : 4 ,
}

const ACCOUNT_CREATION_FEE = '3.000 PULSE'
const CONFIRMATION_PAYMENT_ID_NAME = 'confirmation_payment'

const PRODUCT_CLASS_LIST = [
  'class 1',
  'class 2',
  'class 3'
]

const PRODUCT_LICENSE_TYPE_LIST = [
  'GPL',
  'MIT'
]

const PRODUCT_CATEGORY_LIST = [
  'land',
  'ocean',
  'city',
  'river'
]

const APP_VERSION = 'pulsar/1.5.3';

export default {

  RPC_NODES: finalConfig.RPC_NODES,
  IMAGE_HOSTER: finalConfig.IMAGE_HOSTER,
  ELASTIC: finalConfig.ELASTIC,
  CDN: finalConfig.CDN,
  SERVER_API: finalConfig.SERVER_API,
  TAG_PRODUCT: finalConfig.TAG_PRODUCT,
  
  SBD: SBD,
  STEEM: STEEM,
  SP: SP,
  VESTS: VESTS,
  HARDFORK: HARDFORK,
  
  EFTG_HARDFORK_0_1: finalConfig.EFTG_HARDFORK_0_1,

  EXPLORER,
  DSTEEM_TIMEOUT,

  STEEM_ADDRESS_PREFIX: STEEM_ADDRESS_PREFIX,
  STEEM_100_PERCENT: STEEM_100_PERCENT,
  STEEM_VOTE_REGENERATION_SECONDS: STEEM_VOTE_REGENERATION_SECONDS,
  STEEM_INFLATION_RATE_START_PERCENT: STEEM_INFLATION_RATE_START_PERCENT,
  STEEM_INFLATION_NARROWING_PERIOD: STEEM_INFLATION_NARROWING_PERIOD,
  STEEM_INFLATION_RATE_STOP_PERCENT: STEEM_INFLATION_RATE_STOP_PERCENT,
  STEEM_BLOCKS_PER_YEAR: STEEM_BLOCKS_PER_YEAR,
  STEEM_BLOCKS_PER_DAY: STEEM_BLOCKS_PER_DAY,
  STEEM_SBD_START_PERCENT: STEEM_SBD_START_PERCENT,
  STEEM_SBD_STOP_PERCENT: STEEM_SBD_STOP_PERCENT,
  STEEM_CHAIN_ID,

  MAP:MAP,
  ACCOUNT_CREATION_FEE,
  CONFIRMATION_PAYMENT_ID_NAME,

  PRODUCT_CLASS_LIST,
  PRODUCT_LICENSE_TYPE_LIST,
  PRODUCT_CATEGORY_LIST,

  APP_VERSION: APP_VERSION,
};
