module.exports = [
  { text: '首页', link: '/' },
  // {
  //   text: '工具',
  //   // target: '_self',
  //   link: '/blogs/other/tool.md',
  //   icon: 'reco-other',
  // },
  {
    text: '工具推荐',
    icon: 'reco-other',
    items: [
      {
        text: 'codeSandbox',
        link: 'https://codesandbox.io',
        icon: 'reco-coding',
      },
      {
        text: '正则表达式手册',
        link: 'https://tool.oschina.net/uploads/apidocs/jquery/regexp.html',
        icon: 'reco-coding',
      },
    ],
  },
  // {
  //   text: 'Languages',
  //   items: [
  //     {
  //       text: 'Chinese',
  //       items: [
  //         { text: '广州', link: '/language/chinese/' },
  //         { text: '揭阳', link: '/language/jjjj/' },
  //       ],
  //     },
  //     {
  //       text: 'Japanese',
  //       items: [
  //         { text: '11', link: '/language/chinese/' },
  //         { text: '22', link: '/language/jjjj/' },
  //       ],
  //     },
  //   ],
  // },
  {
    text: '时间轴',
    link: '/timeline/',
    icon: 'reco-date',
    target: '_self',
  },
  {
    text: '掘金',
    link: 'https://juejin.im/user/289926803100680/collections',
    icon: 'reco-juejin',
    target: '_blank',
  },
]
