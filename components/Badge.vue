<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <span
    class="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-800 transition-colors duration-500 dark:bg-zinc-800 dark:text-zinc-300"
  >
    {{ label }}
  </span>
</template>
