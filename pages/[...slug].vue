<script setup lang="ts">
definePageMeta({
  layout: 'blog-post',
});
</script>

<template>
  <main class="prose lg:prose-lg prose-zinc prose-pre:bg-zinc-100 col-span-6">
    <ContentDoc />
  </main>
</template>

<style>
span[emptylineplaceholder] {
  @apply opacity-0;
}
</style>
