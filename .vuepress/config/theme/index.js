const theme = require('./theme.js')

const sidebar = require('../sidebar/')
const locales = require('../locales/')

module.exports = Object.assign({}, theme, {
  sidebar,
  locales
})
