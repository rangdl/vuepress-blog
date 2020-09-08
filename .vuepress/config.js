const path = require('path')
const themeConfig = require('./config/theme/')

module.exports = {
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['script', {}, `
				var _hmt = _hmt || [];
				(function() {
				  var hm = document.createElement("script");
				  hm.src = "https://hm.baidu.com/hm.js?c0117533b84ff8b6f26b4e5842d753bf";
				  var s = document.getElementsByTagName("script")[0]; 
				  s.parentNode.insertBefore(hm, s);
				})();
	`]
  ],
  theme: 'reco',
  themeConfig: themeConfig,
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "颖上",
      description: '在哪里跌倒，就在哪里睡一会。'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: "asddfsd",
    //   description: 'sdgfs;dlf;sdf'
    // }
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3] },
    // extendMarkdown: md => {
    //   // 使用更多的 markdown-it 插件!
    //   md.use(require('markdown-it-xxx'))
    // }
  },
  plugins: [
    ['@vuepress-reco/comments']
  ]
}  
