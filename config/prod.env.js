'use strict'
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  NODE_ENV: '"production"',
  API_BASE: JSON.stringify(process.env.API_BASE)
}
