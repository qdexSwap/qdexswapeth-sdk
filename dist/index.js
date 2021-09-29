
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ethsdk.cjs.production.min.js')
} else {
  module.exports = require('./ethsdk.cjs.development.js')
}
