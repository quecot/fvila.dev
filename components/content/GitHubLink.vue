<script setup lang="ts">
defineProps<{
  title: string;
  href: string;
}>();
</script>

<template>
  <a :href="href" target="_blank" class="w-fit">
    <code class="space-x-1 px-1 before:hidden after:hidden">
      <Icon name="ph:github-logo" size="12" />
      <span class="!font-mono">{{ title }}</span>
    </code>
  </a>
</template>
