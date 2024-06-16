<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <div
    class="rounded border border-dashed border-zinc-300 bg-zinc-100 px-3 py-4 hover:border hover:border-solid dark:border-zinc-700"
  >
    <a :href="href" class="flex items-center space-x-2 no-underline prose-p:m-0 prose-p:font-semibold">
      <Icon name="ph:link" size="20" />
      <ContentSlot />
    </a>
  </div>
</template>
