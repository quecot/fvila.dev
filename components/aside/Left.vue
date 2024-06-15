<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(() => queryContent(route.path).findOne());

const links = data.value?.body?.toc?.links ?? [];
</script>

<template>
  <aside class="col-span-3">
    <ul class="fixed">
      <li v-for="link of links" :key="link.id">
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </aside>
</template>
