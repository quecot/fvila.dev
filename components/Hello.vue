<script setup lang="ts">
const { locale } = useLocale();
</script>

<template>
  <h1 v-if="locale === 'es'">Hola, Nuxt!</h1>
  <h1 v-else>Hello, Nuxt!</h1>
</template>
