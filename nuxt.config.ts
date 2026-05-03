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
  telemetry: false,
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
