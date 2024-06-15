<script setup lang="ts">
const route = useRoute();
const { navDirFromPath } = useContentHelpers();
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

const dir = navDirFromPath(route.path, navigation.value ?? []);
</script>

<template>
  <nav class="flex items-center space-x-2">
    <NuxtLink v-for="item in dir" :key="item.id" :to="item._path" external class="text-blue-700 hover:underline">
      {{ item.title }}
    </NuxtLink>
  </nav>

  <pre>{{ dir }}</pre>
</template>
