module.exports = {
  /*
    ** Single Page Application mode
    ** Means no SSR
    */
  mode: 'spa',
  /*
  ** Headers of the page (works with SPA!)
  */
  /*
  ** Headers of the page
  */
 env: {
    baseUrl: process.env.NODE_ENV == "production" ? "https://www.ludonow.com" : 'http://localhost:3000',
    apiUrl: process.env.NODE_ENV == "production" ? "https://api.ludonow.com" : "http://localhost:8000"
  },
  head: {
    title: '讓備審飛 - 教你做出讓教授滿意的備審資料',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '台灣第一堂教你做備審資料的線上課程,讓所有人都能無負擔的考上理想大學' },
      { property : 'og:title' , content:"讓備審飛 - 教你做出讓教授滿意的備審資料"},
      { property : 'og:type' , content:"education tech."},
      { property : 'og:url' , content:"https://www.ludonow.com/go2university"},
      { property : 'og:image' , content:"https://s3-ap-southeast-1.amazonaws.com/ludo-beta/go2u-og-image.jpg"},
      { property : 'og:description' , content:"台灣第一堂教你做備審資料的線上課程,讓所有人都能無負擔的考上理想大學"},
      { property : 'og:site_name' , content:"www.ludonow.com"},
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

