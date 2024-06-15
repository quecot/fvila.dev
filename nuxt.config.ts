// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/content', '@vueuse/nuxt'],
  devtools: { enabled: false },
  content: {
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
