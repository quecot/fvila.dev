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
    <button
      class="fixed bottom-6 right-8 rounded-full p-2 transition-opacity duration-500 hover:bg-gray-300/20"
      :class="y > SCROLL_TO_TOP_OFFSET ? 'opacity-100' : 'cursor-default opacity-0'"
      @click="navigateToTop"
    >
      <Icon name="ph:arrow-fat-line-up" size="24" />
    </button>
  </aside>
</template>
