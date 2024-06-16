<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <div
    class="rounded-md border border-dashed border-zinc-300 bg-zinc-100 px-3 py-4 transition-colors duration-500 hover:border hover:border-solid hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-400"
  >
    <a :href="href" class="flex items-center space-x-3 text-pretty no-underline prose-p:m-0 prose-p:font-semibold">
      <Icon name="ph:link" size="20" class="min-w-5" />
      <ContentSlot />
    </a>
  </div>
</template>
