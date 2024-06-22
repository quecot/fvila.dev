<script setup lang="ts">
definePageMeta({
  layout: 'blog-post',
});

const route = useRoute();

const { data } = await useAsyncData('post', () => queryContent(route.path).findOne());

const { locale } = useLocale();

const text = data.value?.readingTime.text || '1 min read';
const readingTime = locale.value === 'en' ? text : text.replace(' read', ' de lectura');
</script>

<template>
  <main
    :class="[
      'dark:prose-invert',
      'col-span-12 pb-12 sm:col-span-8 lg:col-span-6',
      'prose prose-zinc pt-4 prose-h1:mb-0 lg:pt-12',
      'prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-800',
      'prose-pre:rounded-md prose-pre:transition-colors prose-pre:duration-500',
      'prose-a:decoration-zinc-400 prose-a:underline-offset-4 dark:prose-a:decoration-zinc-500',
      'hover:prose-a:decoration-zinc-500 dark:hover:prose-a:decoration-zinc-400',
      'prose-a:transition-colors prose-a:duration-500',
    ]"
  >
    <ContentDoc />
    <button class="group flex items-center space-x-2 pt-4" @click="navigateTo(`/blog/${locale}`, { external: true })">
      <Icon name="ph:arrow-left" />
      <span
        v-if="locale === 'es'"
        class="text-zinc-950 decoration-zinc-500 underline-offset-4 group-hover:underline dark:text-zinc-50 dark:decoration-zinc-400"
      >
        Volver a <code class="before:hidden after:hidden">/blog</code>
      </span>

      <span
        v-else
        class="text-zinc-950 decoration-zinc-500 underline-offset-4 group-hover:underline dark:text-zinc-50 dark:decoration-zinc-400"
      >
        Back to <code class="before:hidden after:hidden">/blog</code>
      </span>
    </button>
  </main>

  <ClientOnly>
    <Teleport to="#subheader"> · {{ readingTime }}</Teleport>
  </ClientOnly>
</template>

<style>
span[emptylineplaceholder] {
  @apply opacity-0;
}

header > p {
  @apply !mt-1 text-lg text-zinc-600 dark:text-zinc-400;
}
</style>
