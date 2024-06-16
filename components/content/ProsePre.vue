<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const copied = ref(false);
function copy() {
  copied.value = true;
  navigator.clipboard.writeText(props.code);
  setTimeout(() => {
    copied.value = false;
  }, 1000);
}
</script>

<template>
  <div class="group relative">
    <pre
      :class="$props.class"
      class="rounded-md bg-zinc-100 transition-colors duration-500 dark:bg-zinc-800"
    ><slot /></pre>

    <span class="absolute right-3 top-2 text-sm group-hover:hidden" :class="copied && 'hidden'">
      {{ $props.language }}
    </span>

    <button
      class="absolute right-2 top-2 hidden rounded-md px-1 pb-1 text-sm hover:bg-gray-200 group-hover:block hover:dark:bg-gray-700"
      :class="copied && '!block'"
      :disabled="copied"
      @click="copy()"
    >
      <Icon v-if="copied" name="ph:check" size="16" />
      <Icon v-else name="ph:clipboard" size="16" />
    </button>
  </div>
</template>

<style>
pre code .line {
  display: block;
}
</style>
