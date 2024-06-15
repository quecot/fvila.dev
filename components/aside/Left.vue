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
        <ul class="ml-4">
          <li v-for="sublink in link.children" :key="sublink.id">
            <NuxtLink :to="`#${sublink.id}`">{{ sublink.text }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>
