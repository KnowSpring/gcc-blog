const moment = require('moment')
moment.locale('zh-cn')
module.exports = {
  base: '/docs/',
  title: '量与变',
  description: '积累笔记',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '官春城' }],
    ['meta', { name: 'keywords', content: '前端经验源头' }],
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    lastUpdated: '更新时间',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'External',
        link: 'https://google.com',
        target: '_self',
        rel: '',
      },
      { text: 'Guide', link: '/guide/', target: '_blank' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Chinese',
            items: [
              { text: '广州', link: '/language/chinese/' },
              { text: '揭阳', link: '/language/jjjj/' },
            ],
          },
          {
            text: 'Japanese',
            items: [
              { text: '11', link: '/language/chinese/' },
              { text: '22', link: '/language/jjjj/' },
            ],
          },
        ],
      },
    ],
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
  },
  plugins: [
    '@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        return moment(timestamp).fromNow('LLLL')
      },
    },
  ],
}
