import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      titleTemplate: '%s',
      title: process.env.npm_package_meta_title,
      htmlAttrs: {
        prefix: 'og:http://ogp.me/ns#',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // ** Basic
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_meta_description,
        },

        // * OpenGraph(og)
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: process.env.npm_package_meta_title,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.npm_package_meta_url,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: process.env.npm_package_meta_title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: process.env.npm_package_meta_description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: process.env.npm_package_meta_image,
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
          content: process.env.npm_package_meta_url,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: process.env.npm_package_meta_title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: process.env.npm_package_meta_description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: process.env.npm_package_meta_image,
        },

        /* For Naver Web Master
      <meta name="naver-site-verification" content="b9f47832d1b3a168ae4076e70eb986dd85f0520c" /> */
        {
          name: 'naver-site-verification',
          content: 'b9f47832d1b3a168ae4076e70eb986dd85f0520c',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'alternate', hreflang: 'en', href: 'https://www.get-a.io/en' },
        { rel: 'alternate', hreflang: 'ko', href: 'https://www.get-a.io/' },
      ],
      script: [
        {
          innerHTML: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-11494161709/uJAXCN7Djf0ZEK366-gq',
                  'value': 1.0,
                  'currency': 'KRW',
                  'event_callback': callback
              });
              return false;
            }
          `,
          type: 'text/javascript'
        }
      ],
      // 인라인 스크립트 사용을 위해 sanitize 옵션 비활성화
      __dangerouslyDisableSanitizers: ['script']
    },
  },

  devServer: {
    // @ts-ignore: 다음 줄에서 ts(2580) 에러를 무시합니다.
    host: process.env.HOST || '127.0.0.1', // default: localhost
    // @ts-ignore: 다음 줄에서 ts(2580) 에러를 무시합니다.
    port: Number(process.env.PORT) || 8080,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/css/transition.css', '@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  components: [{ path: '@/components', pathPrefix: false }],

  // Modules: https://nuxt.com/docs/migration/configuration#modules
  modules: [
    // https://vuetify-nuxt-module.netlify.app/guide/
    'vuetify-nuxt-module',
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/gtag
    'nuxt-gtag',
  ],

  /*
   ** vuetify-nuxt-module
   * ref: https://vuetify-nuxt-module.netlify.app/guide/icons/font-icons.html
   */
  // @ts-ignore: 다음 줄에서 ts(2353) 에러를 무시합니다.
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi-svg', // only need to add @mdi/js
      },
    },
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */

  build: {
    analyze: true, // Analyze the build

    // https://vuetify-nuxt-module.netlify.app/, https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
    transpile: ['vuetify'],
  },

  // Vite configuration
  vite: {
    build: {
      minify: 'terser',
      // sourcemap: true, // 디버깅용
      terserOptions: {
        compress: {
          drop_console: false,
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
        },
        mangle: true, // Option to disable name mangling
      },
    },
    resolve: {
      alias: {
        '../i18n/locales': '/locales',
      },
    },
  },

  compatibilityDate: '2024-10-31',

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English',
        dir: 'ltr',
      },
      { code: 'ko', iso: 'ko-KR', file: 'ko.json', name: 'Korean', dir: 'ltr' },
    ],
    defaultLocale: 'ko', // 기본 언어
    lazy: true, // JSON 파일 지연 로드
    langDir: './locales/', // JSON 파일 경로
    legacy: false,
    fallbackLocale: 'en',
  },

  gtag: {
    id: 'G-BPVZV9J1PC', // 여기에 실제 Google 태그 ID를 입력하세요.
    debug: true, // 개발, 배포 모든 환경에서 디버그 모드 활성화
    enabled: process.env.NODE_ENV === 'production', // = 배포 환경에서만 활성화  // 개발, 배포 모두: true
  },
})
