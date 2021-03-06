import webpack from 'webpack'
const env = require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dbcnews.tv',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/dbc-red-logo.png' }],
  },

  loading: { color: '#5E8E3E' },

  css: [],

  server: {
    port: 3002, // default: 3000
    host: '127.0.0.2', // default: localhost
  },

  plugins: [
    '~/plugins/components',
    '@/plugins/VueSweetAlert',
    '@/plugins/VueJsModal',
    '@/plugins/VueLazyload',
    '@/plugins/VueFragment',
    // '@/plugins/VueScrollTo',
  ],

  components: true,

  router: {
    middleware: ['clearValidationErrors', 'drawerMenuMiddleware'],
  },

  buildModules: ['@nuxt/postcss8', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', 'vue-scrollto/nuxt'],

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://admin.test',
        endpoints: {
          login: {
            url: '/auth/login',
          },
          logout: {
            url: '/auth/logout',
          },
        },
      },
    },
  },

  axios: {
    baseURL: 'http://admin.test',
    credentials: true,
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],

    // extend(config, ctx) {
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //       options: {
    //         fix: true,
    //       },
    //     })
    //   }
    // },
  },
}
