module.exports = {
  /*
    ** Single Page Application mode
    ** Means no SSR
    */
  mode: 'ssr',
  /*
  ** Headers of the page (works with SPA!)
  */
  /*
  ** Headers of the page
  */
 env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiUrl: process.env.API_URL || 'http://localhost:8000',
  },
  head: {
    title: 'Ludo Now',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { property : 'og:title' , content:""},
      { property : 'og:type' , content:""},
      { property : 'og:url' , content:""},
      { property : 'og:image' , content:""},
      { property : 'og:description' , content:""},
      { property : 'og:site_name' , content:""},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://sdk.accountkit.com/en_US/sdk.js' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/gtm.js', ssr: false },
    { src: '~/plugins/hotjar.js', ssr: false },
    { src: '~/plugins/checkLogin.js', ssr: false },
    { src: '~/plugins/forceLogin.js', ssr: false },

  ],
  // serverMiddleware: ['~/middleware/selectiveSSR'],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

