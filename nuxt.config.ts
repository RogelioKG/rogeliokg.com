export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxt/eslint'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    name: 'RogelioKG',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
