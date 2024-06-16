<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

const mode = useColorMode();

function toggleMode() {
  const newMode = mode.preference === 'light' ? 'dark' : mode.preference === 'dark' ? 'system' : 'light';
  mode.preference = newMode;
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

        <ClientOnly>
          <button class="pb-1" @click="toggleMode">
            <Icon
              :name="mode.preference === 'light' ? 'ph:sun' : mode.preference === 'dark' ? 'ph:moon' : 'ph:monitor'"
              size="20"
              class="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
            />
          </button>

          <template #fallback>
            <div class="pb-1">
              <Icon name="ph:monitor" size="20" class="text-zinc-700 dark:text-zinc-400" />
            </div>
          </template>
        </ClientOnly>
      </div>
    </nav>
  </header>
</template>
