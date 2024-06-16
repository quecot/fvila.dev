// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  colorMode: {
    classSuffix: '',
  },
  devtools: { enabled: false },
  content: {
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
    experimental: {
      search: { indexed: true },
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  css: ['~/assets/css/main.css'],
});
