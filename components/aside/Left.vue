<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData('post', () => queryContent(route.path).findOne());

const links = data.value?.body?.toc?.links ?? [];
</script>

<template>
  <aside class="group z-10 text-sm sm:col-span-2 lg:col-span-3">
    <div class="fixed hidden space-y-2 lg:block">
      <Icon
        name="ph:list-dashes"
        size="20"
        class="text-zinc-900 opacity-30 transition-opacity duration-500 group-hover:opacity-100 dark:text-zinc-300"
      />

      <ul class="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <li v-for="link of links" :key="link.id" class="space-y-1.5">
          <NuxtLink
            class="text-zinc-500 underline decoration-zinc-300 underline-offset-2 transition-colors duration-500 hover:text-zinc-900 hover:decoration-zinc-500 dark:decoration-zinc-700 dark:hover:text-zinc-300 dark:hover:decoration-zinc-500"
            :to="`#${link.id}`"
          >
            {{ link.text }}
          </NuxtLink>

          <ul class="ml-4">
            <li v-for="sublink in link.children" :key="sublink.id" class="-mt-0.5 mb-2 space-y-1">
              <NuxtLink
                class="text-zinc-500 underline decoration-zinc-300 underline-offset-2 transition-colors duration-500 hover:text-zinc-900 hover:decoration-zinc-500 dark:decoration-zinc-700 dark:hover:text-zinc-300 dark:hover:decoration-zinc-500"
                :to="`#${sublink.id}`"
              >
                {{ sublink.text }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>
