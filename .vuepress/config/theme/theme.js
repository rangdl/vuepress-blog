module.exports = Object.assign({}, {
  type: 'blog',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  subSidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated',
  // 作者
  author: 'rangdl',
  // 作者头像
  authorAvatar: '/avatar.png',
  // 备案号
  // record: 'xxxx',
  // recordLink: 'ICP 备案指向链接',
  // cyberSecurityRecord: '公安部备案文案',
  // cyberSecurityLink: '公安部备案指向链接',
  // 项目开始时间
  startYear: '2020',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认 “分类” 
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签' // 默认 “标签” 
    }
  },
  friendLink: [
    {
      title: '午后南杂',
      desc: 'Enjoy when you can, and endure when you must.',
      email: '1156743527@qq.com',
      link: 'https://www.recoluan.com'
    },
    {
      title: 'vuepress-theme-reco',
      desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: 'https://vuepress-theme-reco.recoluan.com'
    },
  ],
  logo: '/logo.png',
  // huawei: true,
  /**
 * 密钥 (if your blog is private)
 */

  // keyPage: {
  //   keys: ['your password'],
  //   color: '#42b983',
  //   lineColor: '#42b983'
  // },

  /**
   * valine 设置 (if you need valine comment )
   */

  valineConfig: {
    appId: '6wkpTS9XcTz0Pdsouonu0GAS-gzGzoHsz',// your appId
    appKey: 'uAuxa0HdGQ6ggUETfey76aPP', // your appKey
  }
})
