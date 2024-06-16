<script setup lang="ts">
definePageMeta({
  layout: 'blog-post',
});

const route = useRoute();

const { data } = await useAsyncData('post', () => queryContent(route.path).findOne());

const readingTime = data.value?.readingTime.text;
</script>

<template>
  <main
    :class="[
      'prose prose-zinc col-span-12 pt-4',
      'lg:prose-lg prose-pre:bg-zinc-100',
      'sm:col-span-8 lg:col-span-6 lg:pt-12',
      'prose-h1:mb-0',
    ]"
  >
    <ContentDoc />
  </main>

  <ClientOnly>
    <Teleport to="#subheader"> - {{ readingTime }}</Teleport>
  </ClientOnly>
</template>

<style>
span[emptylineplaceholder] {
  @apply opacity-0;
}

header > p {
  @apply !mt-1 text-lg text-zinc-600;
}
</style>
