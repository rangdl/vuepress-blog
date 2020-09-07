const nav = require('../nav/')
const sidebar = require('../sidebar/')
module.exports = {
  // 键名是该语言所属的子路径
  // 作为特例，默认语言可以使用 '/' 作为其路径。
  '/': {
    // 多语言下拉菜单的标题
    selectText: '语言',
    // 该语言在下拉菜单中的标签
    label: '简体中文',
    nav: nav.zh,
    sidebar: sidebar.zh
  },
  '/en/': {
    selectText: 'language',
    label: 'English',
    nav: nav.en,
    sidebar: sidebar.en
  }
}
