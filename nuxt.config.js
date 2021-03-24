import cities from './routes'
const dev = process.env.NODE_ENV !== 'production'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'local-insights',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/http'],

  // Tailwind config (https://tailwindcss.nuxtjs.org/)
  tailwindcss: {
    jit: true,
    config: {
      presets: [require('@funda/tailwind-config')],
    },
  },

  svgSprite: {
    input: '~/assets/icons/',
    elementClass: 'fill-current h-4 w-4',
  },

  http: {
    proxy: true,
  },
  proxy: {
    '/api/': dev ? 'http://localhost:7071/' : '/',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     ** You can extend webpack config here
     */

    // analyze: {
    //   analyzerMode: 'static',
    // },
    extractCSS: true,
    extend(config, ctx) {},
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  },
  vue: {
    config: {
      productionTip: false,
    },
  },
  features: {
    store: false,
    transitions: false,
    deprecations: false,
    validate: false,
    clientOnline: false,
  },

  generate: {
    cache: {
      crawler: false,
      ignore: ['jest.config.js'], // ignore changes applied on this file
    },
    routes: cities,
  },
}
