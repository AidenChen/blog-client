// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: { lang: 'zh-cmn-Hans' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, user-scalable=no',
      title: 'Aiden Notes',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'renderer', content: 'webkit' },
        { name: 'google', content: 'notranslate' }
      ]
    }
  },
  srcDir: 'src/',
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  css: [
    '@/assets/styles/index.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: ''
        }
      }
    }
  }
})
