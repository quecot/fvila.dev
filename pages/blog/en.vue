<script setup lang="ts">
definePageMeta({
  layout: 'post-list',
});

const route = useRoute();
const { data: articles } = await useAsyncData('blog', () => queryContent(route.path).find());

function isOlderThanAWeek(dateAsString: string) {
  const date = new Date(dateAsString);
  date.setDate(date.getDate() + 7);
  return date < new Date();
}

const { locale } = useLocale();

const region = Intl.DateTimeFormat(locale.value, {
  month: 'short',
  day: 'numeric',
});
</script>

<template>
  <main
    class="col-span-12 col-start-1 mx-auto max-w-none pt-4 sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-4 lg:pt-12"
  >
    <nav class="flex flex-col items-center space-y-4 text-lg">
      <NuxtLink
        v-for="article in articles"
        :key="article.id"
        :to="article._path"
        external
        class="group relative space-x-2 text-pretty md:text-center"
      >
        <span
          class="text-zinc-600 transition-colors duration-500 group-hover:text-zinc-950 dark:text-zinc-200 dark:group-hover:text-zinc-50"
        >
          {{ article.title }}
        </span>

        <span
          class="text-base text-zinc-500 transition-colors duration-500 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300"
        >
          {{ region.format(new Date(article.date)) }} · {{ article.readingTime.text.replace(' read', '') }}
        </span>

        <Badge v-if="!isOlderThanAWeek(article.date)" label="New" class="-left-16 top-0.5 sm:absolute" />
      </NuxtLink>
    </nav>
  </main>
</template>
