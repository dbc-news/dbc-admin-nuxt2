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

  plugins: [
    '~/plugins/components',
    '@/plugins/VueSweetAlert',
    '@/plugins/VueJsModal',
    '@/plugins/VueLazyload',
  ],

  components: true,

  router: {
    middleware: ['clearValidationErrors'],
  },

  buildModules: ['@nuxt/postcss8', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://admin.test',
        endpoints: {
          login: {
            url: '/auth/login',
          },
        },
      },
    },
  },

  axios: {
    baseURL: 'http://admin.test/admin',
    credentials: true,
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
