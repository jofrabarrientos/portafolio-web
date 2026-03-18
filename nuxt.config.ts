import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/seo'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: [
    '~/assets/css/font-awesome-pro.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/scroll_button.css',
    '~/assets/css/spacing.css',
    '~/assets/css/plugin.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css',
    '~/assets/css/main.css'
  ],
  site: {
    url: 'https://josebarrientos.dev',
    name: 'José Barrientos - Portafolio',
    description: 'Portafolio de José Barrientos, Full Stack Developer experto en Laravel y Vue.js.',
    defaultLocale: 'es',
  }
})
