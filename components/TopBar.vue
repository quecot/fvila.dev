<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

const mode = useColorMode();

function toggleMode() {
  const newMode = mode.value === 'light' ? 'dark' : mode.value === 'dark' ? 'light' : 'system';
  mode.value = newMode;
}
</script>

<template>
  <header class="top-0 z-50 px-4 py-3 sm:sticky lg:px-8 lg:py-6">
    <nav class="flex items-center justify-between">
      <NuxtLink to="/" class="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300">
        Home
      </NuxtLink>

      <div class="flex items-center justify-between space-x-4">
        <NuxtLink
          v-for="item in navigation"
          :key="item._path"
          :to="item._path"
          class="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
        >
          {{ item.title }}
        </NuxtLink>

        <button class="pb-1" @click="toggleMode">
          <Icon
            :name="mode.value === 'light' ? 'ph:sun' : mode.value === 'dark' ? 'ph:moon' : 'ph:monitor'"
            size="20"
            class="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
          />
        </button>
      </div>
    </nav>
  </header>
</template>
