<script setup lang="ts">
const route = useRoute();

async function navigateToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  await navigateTo(route.path);
}
</script>

<template>
  <aside class="col-span-3">
    <button class="fixed bottom-6 right-8" @click="navigateToTop">Go to top</button>
  </aside>
</template>
