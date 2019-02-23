module.exports = {
  /*
    ** Single Page Application mode
    ** Means no SSR
    */
  // mode: 'spa',
  /*
  ** Headers of the page (works with SPA!)
  */
  /*
  ** Headers of the page
  */
 env: {
    baseUrl: process.env.NODE_ENV == "production" ? "https://www.ludonow.com" : 'http://localhost:3000',
    apiUrl: process.env.NODE_ENV == "production" ? "https://api.ludonow.com" : "'http://localhost:8000'"
  },
  head: {
    title: 'Ludo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ludo is a life style' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
    { src: '~/plugins/checkLogin.js', ssr: false },
  ],
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

