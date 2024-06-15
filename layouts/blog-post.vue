<template>
  <TopBar />

  <div class="grid grid-cols-12 px-8">
    <AsideLeft />
    <slot />
    <AsideRight />
  </div>
</template>
