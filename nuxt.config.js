import * as SITE_INFO from './content/pl/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

export default {
  target: 'static',
  components: true,
  generate: {
    fallback: true
  },
  // ? The env Property: https://nuxtjs.org/api/configuration-env/
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.BASE_URL : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'pl-PL'
  },
  publicRuntimeConfig: {
    baseURL: process.env.NODE_ENV = 'production' ? process.env.BASE_URL : 'http://localhost:3000'
  },
  privateRuntimeConfig: {},
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap',
        media: 'print',
        onload: `this.media='all'`
      }
    ],
    noscript: [
      {
        innerHTML:
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap">'
      }
    ],
    __dangerouslyDisableSanitizers: ['noscript']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#526488' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-content-placeholders.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/color-mode', '@nuxtjs/svg'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', 'nuxt-i18n'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Custom additions configuration
   */
  // ? The content property: https://content.nuxtjs.org/configuration
  content: {
    dir: 'content'
  },
  i18n: {
    defaultLocale: 'pl',
    locales: [
      {
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl-PL.json'
      },
      {
        code: 'en',
        iso: 'en-GB',
        file: 'en-GB.json'
      }
    ],
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'pl'
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax'
      }
    }
  },
}
