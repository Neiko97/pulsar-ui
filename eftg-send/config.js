// Authentication
const username = 'alice'
const password = '5JigYMYuGU3QMYaYcofpSx1XrmQuFrmQYm7TaNpz932HduT1nT4' // Posting key

const APP_VERSION = 'sendjs/1.0.0'

const config = {
  'production': {
    RPC_NODE : { url: "http://192.168.56.2:8079" },
    IMAGE_HOSTER : { url: "http://127.0.1.1:3306" },
    ELASTIC : { url: "https://api.eftg.eu/pulsar/" },
    CDN : { url: "http://127.0.1.1/" },
    EFTG_HARDFORK_0_1 : false
  },
  'acceptance': {
    RPC_NODE : { url: "http://192.168.56.2:8079" },
    IMAGE_HOSTER : { url: "http://127.0.1.1:3306" },
    ELASTIC : { url: "https://api.blkcc.xyz/pulsar/" },
    CDN : { url: "http://127.0.1.1/" },
    EFTG_HARDFORK_0_1 : false
  },
  'development': {
    RPC_NODE : { url: "http://192.168.56.2:8079" },
    IMAGE_HOSTER : { url: "http://127.0.1.1:3306" },
    ELASTIC : { url: "https://apidev.blkcc.xyz/pulsar/" },
    CDN : { url: "http://127.0.1.1/" },
    EFTG_HARDFORK_0_1 : true
  }
}

const environment = process.env.NODE_ENV || 'production'
const finalConfig = config[environment]
const finalUsername = process.env.USERNAME || username
const finalPassword = process.env.PASSWORD || password

module.exports = {
  username: finalUsername,
  password: finalPassword,
  IMAGE_HOSTER : finalConfig.IMAGE_HOSTER.url,
  RPC_NODE : finalConfig.RPC_NODE.url,
  EFTG_HARDFORK_0_1 : finalConfig.EFTG_HARDFORK_0_1,
  APP_VERSION
}
