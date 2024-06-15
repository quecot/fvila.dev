<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(() => queryContent(route.path).findOne());

const links = data.value?.body?.toc?.links ?? [];
</script>

<template>
  <aside class="group col-span-3 text-sm">
    <div class="fixed space-y-2">
      <Icon
        name="ph:list-dashes"
        size="24"
        class="text-zinc-900 opacity-30 transition-opacity duration-500 group-hover:opacity-100"
      />

      <ul class="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <li v-for="link of links" :key="link.id" class="space-y-0.5">
          <NuxtLink
            class="text-zinc-500 underline decoration-zinc-300 underline-offset-2 transition-colors duration-500 hover:text-zinc-900 hover:decoration-zinc-500"
            :to="`#${link.id}`"
          >
            {{ link.text }}
          </NuxtLink>

          <ul class="ml-4">
            <li v-for="sublink in link.children" :key="sublink.id" class="space-y-0.5">
              <NuxtLink
                class="text-zinc-500 underline decoration-zinc-300 underline-offset-2 transition-colors duration-500 hover:text-zinc-900 hover:decoration-zinc-500"
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
