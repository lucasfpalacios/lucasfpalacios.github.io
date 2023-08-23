export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cv-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&family=Qwitcher+Grypen:wght@700&display=swap' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/4c0350c107.js', crossorigin: 'anonymous' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/global.scss'
  ],

  styleResources: {
    scss: [
      '~/assets/styles/variables.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.js'
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.js'
      }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'no_prefix'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
