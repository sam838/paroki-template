import colors from 'vuetify/es5/util/colors'
import dotenv from 'dotenv'
const axios = require('axios')

dotenv.config()

const useLocal = process.env.USE_LOCAL

const cimColors = {
  darkgreen: '#0B9948',
  lightgreen: '#A8CC38',
  maroon: '#A85D40',
  orange: '#ED8122',
  white: '#FFFFFF'
}

async function getPayload (url, callback) {
  return await axios.get(url, {
    headers: {
      Id: process.env.APP_ID,
      Secret: process.env.APP_SECRET,
      Partner: process.env.PARTNER
    }
  }).then((res) => {
    return res.data
  }).catch(callback)
}

const setting = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Paroki Kristus Raja Ngrambe',
    title: 'Paroki Kristus Raja Ngrambe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'Paroki Kristus Raja Ngrambe' },
      {
        hid: 'description',
        name: 'description',
        content: 'Paroki Kristus Raja Ngrambe'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Paroki Kristus Raja Ngrambe'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Paroki Kristus Raja Ngrambe'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://static.imavi.org/cim/logo.jpg'
      },
      {
        hid: 'image',
        name: 'image',
        content: 'https://static.imavi.org/cim/logo.jpg'
      }
      // {
      //   hid: 'og:url',
      //   name: 'og:url',
      //   content: 'https://doctrina.imavi.org/'
      // }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap' },

      { rel: 'stylesheet', href: '/assets/css/animate.min.css' },
      { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/assets/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: '/assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css' },
      { rel: 'stylesheet', href: '/assets/plugins/kipso-icons/style.css' },
      { rel: 'stylesheet', href: '/assets/css/magnific-popup.css' },
      { rel: 'stylesheet', href: '/assets/css/vegas.min.css' },
      { rel: 'stylesheet', href: '/assets/css/style.css' },
      { rel: 'stylesheet', href: '/assets/css/responsive.css' }
    ],

    script: [
      { src: '/assets/js/jquery.min.js', body: true },
      { src: '/assets/js/bootstrap.bundle.min.js', body: true },
      { src: '/assets/js/waypoints.min.js', body: true },
      { src: '/assets/js/owl.carousel.min.js', body: true },
      { src: '/assets/js/jquery.counterup.min.js', body: true },
      { src: '/assets/js/TweenMax.min.js', body: true },
      { src: '/assets/js/wow.js', body: true },
      { src: '/assets/js/jquery.magnific-popup.min.js', body: true },
      { src: '/assets/js/countdown.min.js', body: true },
      { src: '/assets/js/vegas.min.js', body: true },
      { src: '/assets/js/jquery.validate.min.js', body: true },
      { src: '/assets/js/jquery.ajaxchimp.min.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss',
    '@/assets/_mq.scss'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'vue-sweetalert2/nuxt'
  ],

  plugins: [
    '~/plugins/both/bu.js',
    '~/plugins/client/cu.client.js',
    '~/plugins/client/format-date.js',
    '~/plugins/TiptapVuetify',
    '~/plugins/Countdown'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.green.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken3,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify']
  },
  target: 'static',
  generate: {
    async routes (callback) {
      let imaviUrl = 'http://localhost:3005/imavi/'
      if (useLocal === 'false') {
        imaviUrl = 'https://api.imavi.org/imavi/'
      }
      const allNews = await getPayload(imaviUrl + 'news/get-all', callback)
      const allArticles = await getPayload(imaviUrl + 'articles/get-all', callback)

      const routeList = [
        {
          route: '/news/list',
          payload: allNews
        },
        {
          route: '/articles/list',
          payload: allArticles
        }
      ]

      allNews.forEach((element) => {
        routeList.push({
          route: '/news/' + element.slug,
          payload: element
        })
      })
      allArticles.forEach((element) => {
        routeList.push({
          route: '/articles/' + element.slug,
          payload: element
        })
      })

      callback(null, routeList)
    }

  }
}

let baseURL
if (useLocal === 'true') {
  baseURL = 'http://localhost:8888'
} else {
  baseURL = ''
}
setting.axios = {
  baseURL
}

export default setting
