<script setup lang="ts">
definePageMeta({
  layout: 'blog-post',
});
</script>

<template>
  <main
    class="prose prose-zinc col-span-12 pt-4 lg:prose-lg prose-pre:bg-zinc-100 sm:col-span-8 lg:col-span-6 lg:pt-12"
  >
    <ContentDoc />
  </main>
</template>

<style>
span[emptylineplaceholder] {
  @apply opacity-0;
}
</style>
