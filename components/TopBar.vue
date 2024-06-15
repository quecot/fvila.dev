<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
</script>

<template>
  <header class="sticky top-0 z-50 px-8 py-6">
    <nav class="flex items-center justify-between">
      <NuxtLink to="/">Home</NuxtLink>

      <div class="flex items-center justify-between space-x-4">
        <NuxtLink
          v-for="item in navigation"
          :key="item._path"
          :to="item._path"
          class="text-gray-700 hover:text-gray-900"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
