const headConfig = require('./config/headConfig')
const pluginsConfig = require('./config/pluginsConfig')
const navConfig = require('./config/navConfig')
const moment = require('moment')
moment.locale('zh-cn')
// console.log('pluginsConfig', pluginsConfig)
module.exports = {
  base: '/gcc-blog/',
  title: '一叶の春',
  description: '愿时光能缓，愿故人不散',
  head: headConfig,
  theme: 'reco',
  plugins: pluginsConfig,
  themeConfig: {
    huawei: true,
    // 博客配置
    logo: '/assets/img/logo.png',
    authorAvatar: '/assets/avatar.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '更新时间',
    author: '',
    record: 'xxxx',
    startYear: '2019',
    subSidebar: 'auto',
    type: 'blog',
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认文案 “标签”
      },
    },
    nav: navConfig,
    // sidebar: [
    //   {
    //     title: 'Group 1', // 必要的
    //     path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ['/'],
    //   },
    //   {
    //     title: 'Group 2',
    //     children: [
    //       /* ... */
    //     ],
    //     initialOpenGroupIndex: -1, // 可选的, 默认值是 0
    //   },
    // ],
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com',
      },
      // ...
    ],
    markdown: {
      lineNumbers: true,
    },
  },
}
