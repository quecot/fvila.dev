import type { ParsedContent } from '@nuxt/content/types';

export default () => {
  const route = useRoute();

  const spanishArticles = useState<ParsedContent[]>('spanish-articles', () => []);
  const englishArticles = useState<ParsedContent[]>('english-articles', () => []);

  callOnce(async () => {
    const data = await queryContent('/blog').find();
    spanishArticles.value = data.filter((article) => article._dir === 'es');
    englishArticles.value = data.filter((article) => article._dir === 'en');
  });

  const locale = computed(() => (route.path.includes('/es') ? 'es' : 'en'));

  const currentArticleIndex = computed(() => {
    const articles = locale.value === 'es' ? spanishArticles.value : englishArticles.value;
    return articles.findIndex((article) => article._path === route.path);
  });

  async function switchLocale(locale: string) {
    const currentPath = route.path;
    const articles = locale === 'es' ? spanishArticles.value : englishArticles.value;

    if (currentArticleIndex.value !== -1) {
      await navigateTo(articles[currentArticleIndex.value]._path, { external: true });
    } else {
      await navigateTo(currentPath.replace(/\/(es|en)/, `/${locale}`), { external: true });
    }
  }

  return {
    locale,
    switchLocale,
  };
};
