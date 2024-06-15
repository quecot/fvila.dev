<script setup lang="ts">
const SCROLL_TO_TOP_OFFSET = 100;

const route = useRoute();

const { y } = useWindowScroll();

async function navigateToTop() {
  y.value = 0;
  await navigateTo(route.path);
}
</script>

<template>
  <aside class="col-span-3">
    <button v-show="y > SCROLL_TO_TOP_OFFSET" class="fixed bottom-6 right-8" @click="navigateToTop">Go to top</button>
  </aside>
</template>
