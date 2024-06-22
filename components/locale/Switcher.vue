<script setup lang="ts">
const { locale, switchLocale } = useLocale();
</script>

<template>
  <button @click="switchLocale(locale === 'en' ? 'es' : 'en')">
    <span
      class="rounded-md !font-mono text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
    >
      {{ locale.toUpperCase() }}
    </span>
  </button>
</template>
