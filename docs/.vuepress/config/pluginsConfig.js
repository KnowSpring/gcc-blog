const moment = require('moment')
const secret = require('./secret')
moment.locale('zh-cn')
module.exports = [
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        // return moment(timestamp).format('LLLL')
        return moment(timestamp).toString()
      },
    },
  ],
  ['vuepress-plugin-auto-sidebar', {}],
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新',
      },
    },
  ],
  [
    '@vssue/vuepress-plugin-vssue',
    {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'KnowSpring',
      repo: 'gcc-blog',
      autoCreateIssue: true,
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
    },
  ],
  [
    '@vuepress/medium-zoom',
    {
      selector: 'img', //img.class名，指定缩放
    },
  ],
  ['@vuepress/back-to-top', {}],
  //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: [
        'wanko',
        'blackCat',
        'whiteCat',
        'haru1',
        'haru2',
        'haruto',
        'koharu',
        'izumi',
        'shizuku',
        'miku',
        'z16',
      ],
      clean: false,
      messages: {
        welcome: '我是lookroot欢迎你的关注 ',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '再见哦',
      },
      width: 240,
      height: 352,
    },
  ],
  [
    'meting',
    {
      auto: 'https://api.i-meto.com/meting/api', //你的歌单的链接，网页歌单链接
      meting: {
        // 网易
        server: 'netease',
        // 读取歌单
        type: 'playlist',
        mid: '696441716',
      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded: true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.1,
        // 关闭歌词显示
        lrcType: 0,
      },
      mobile: {
        // 手机端去掉cover图
        cover: false,
      },
    },
  ],
  [
    //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
    'dynamic-title',
    {
      showIcon: '/favicon.ico',
      showText: '(/≧▽≦/)咦！又好了！',
      hideIcon: '/failure.ico',
      hideText: '(●—●)喔哟，崩溃啦！',
      recoverTime: 2000,
    },
  ],

  //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
  ['flowchart', {}],

  [
    //插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save
    'sitemap',
    {
      hostname: 'https://www.glassysky.site',
    },
  ],

  [
    'vuepress-plugin-nuggets-style-copy',
    {
      copyText: '复制代码', //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: '复制成功!',
      },
    },
  ],
]
