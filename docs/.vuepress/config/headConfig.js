module.exports = [
  // ['script', { src: 'scripts/yinghua.js' }],
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['meta', { name: 'author', content: '官春城' }],
  ['meta', { name: 'keywords', content: '前端经验源头' }],
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no',
    },
  ],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  (module.exports = [
    'link',
    { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' },
  ]),
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c',
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
]
