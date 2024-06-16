<template>
  <TopBar />

  <div class="grid grid-cols-12 px-4 lg:px-8">
    <AsideLeft />
    <slot />
    <AsideRight />
  </div>

  <BackgroundWiggle />
</template>
