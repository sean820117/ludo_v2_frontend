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
      { src: 'https://sdk.accountkit.com/en_US/sdk.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://player.vimeo.com/api/player.js' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  css: [
    // { src: "swiper/dist/css/swiper.css" }
  ],
  loading: {
    color: 'black',
    failedColor: 'red',
    height: '2px',
    throttle: 500,
    duration: 5000,
    rtl: false
  },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/gtm.js', ssr: false },
    // { src: '~/plugins/ga-victor.js', ssr: false },
    { src: '~/plugins/hotjar.js', ssr: false },
    { src: '~/plugins/checkLogin.js', ssr: false },
    { src: '~/plugins/checkPayed.js', ssr: false },
    { src: '~/plugins/modal.js', ssr: false },
    { src: '~/plugins/loading.js', ssr: false },
    { src: '~/plugins/forceLogin.js', ssr: false },
    { src: '~/plugins/scrollTo.js', ssr: false },
    // { src: "~/plugins/vue-swiper.js", ssr: false }   
  ],
  modules: [
    ['@nuxtjs/google-gtag', { id: 'UA-137420846-2' }],    
    ['nuxt-facebook-pixel-module', {
      /* module options */
      pixelId: '2273854532873952',
      disabled: true,
    }],
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

