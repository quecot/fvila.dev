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
  <aside class="z-10 sm:col-span-2 lg:col-span-3">
    <ClientOnly>
      <button
        class="fixed bottom-2 right-2 rounded-full p-2 transition-opacity duration-500 hover:bg-zinc-300/20 lg:bottom-6 lg:right-8"
        :class="y > SCROLL_TO_TOP_OFFSET ? 'opacity-100' : 'cursor-default opacity-0'"
        @click="navigateToTop"
      >
        <Icon name="ph:arrow-fat-line-up" size="24" />
      </button>
    </ClientOnly>
  </aside>
</template>
