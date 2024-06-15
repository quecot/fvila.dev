<script setup lang="ts">
definePageMeta({
  layout: 'blog-post',
});
</script>

<template>
  <main class="prose prose-zinc col-span-6 pt-12 lg:prose-lg prose-pre:bg-zinc-100">
    <ContentDoc />
  </main>
</template>

<style>
span[emptylineplaceholder] {
  @apply opacity-0;
}
</style>
