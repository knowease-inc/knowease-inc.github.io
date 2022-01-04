import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 소개 페이지',
    title: '쉬운지식',
    htmlAttrs: {
      prefix: 'og:http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_meta_description ||
          '세상 모든 지식 & 정보격차 해소를 위합니다',
      },
      // * OpenGraph(og) ref.https://qiita.com/amishiro/items/b7260116b282d2cf2756
      // ** Basic
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: (process.env.npm_package_meta_title || '쉬운지식')
          .toString()
          .toUpperCase(), // temporaliy : https://stackoverflow.com/a/55068662
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content:
          process.env.npm_package_meta_url || 'https://knowease-inc.github.io/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.npm_package_meta_title || '쉬운지식',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          process.env.npm_package_meta_description ||
          '세상 모든 지식 & 정보격차 해소를 위합니다',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          process.env.npm_package_meta_image ||
          'https://knowease-inc.github.io/img/thumbnail/knowease_og_thumbnail_20220104.png',
      },
      // ** For Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content:
          process.env.npm_package_meta_url || 'https://knowease-inc.github.io',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: process.env.npm_package_meta_title || '쉬운지식',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          process.env.npm_package_meta_description ||
          '세상 모든 지식 & 정보격차 해소를 위합니다',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          process.env.npm_package_meta_image ||
          'https://knowease-inc.github.io/img/thumbnail/knowease_og_thumbnail_20220104.png',
      },
      /*
      For Google Search Console
      <meta name="google-site-verification" content="NXprhyX8ZG7MoveZppYftz0xIl5kkkYSK9xJ4tXQPLk" />
      */
      {
        name: 'google-site-verification',
        content: 'NXprhyX8ZG7MoveZppYftz0xIl5kkkYSK9xJ4tXQPLk',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/css/transition.css', '@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // for TypeScript
    '@nuxt/typescript-build',
    // doc : https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
    // doc : https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit',
    // doc : https://axios.nuxtjs.org/setup
    '@nuxtjs/axios',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      light: true,
      themes: {
        light: {
          background: colors.grey.lighten5,
          primary: colors.blue.accent3,
          secondary: colors.blue.accent2,
          barinfo: colors.shades.white,
          ranker: colors.blue.accent3,
          rankerlower: colors.grey.darken2,
          info: colors.grey.darken2,
          unactivated: colors.grey.darken1,
          success: colors.green.base,
          warning: colors.deepOrange.accent4,
          error: colors.red.base,
          chart: {
            first: colors.blue.darken1,
            second: colors.blue.lighten1,
            third: colors.blue.lighten3,
            fourth: colors.blue.lighten5,
          },
        },
      },
    },
  },

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },

  // Pass your Google Analytics ID to id field of googleAnalytics
  googleAnalytics: {
    id: 'UA-168397043-2',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
