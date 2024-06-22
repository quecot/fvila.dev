<script setup lang="ts">
const props = defineProps<{
  title: string;
  date: string;
}>();

const route = useRoute();

// TODO: create composable to get the current locale
const isSpanish = route.path.includes('/es/');
const isEnglish = route.path.includes('/en/');

const format = Intl.DateTimeFormat(isSpanish ? 'es' : isEnglish ? 'en' : 'en', {
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
