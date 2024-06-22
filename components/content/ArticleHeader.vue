<script setup lang="ts">
const props = defineProps<{
  title: string;
  date: string;
}>();

const { locale } = useLocale();

const format = Intl.DateTimeFormat(locale.value, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

const formattedDate = computed(() => format.format(new Date(props.date)));
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <p id="subheader">{{ formattedDate }}</p>
  </header>
</template>
