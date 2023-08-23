<template>
  <div>
    <div class="presentation d-flex flex-column align-items-center justify-content-center">
      <h1 class="text-light">
        {{ $t('pages.home.title') }}
      </h1>
      <h2 class="text-light">
        {{ $t('pages.home.subtitle') }}
      </h2>
      <b-button class="button my-5" href="#footer" variant="outline-light">
        {{ $t('pages.home.contact') }}
      </b-button>
    </div>
  </div>
</template>

<style lang="scss">
.presentation {
  background: url('../assets/japan-bg.png') center/cover no-repeat;
  height: 100vh;
  flex-direction: column;
  font-family: 'JetBrains Mono', monospace;
}

.button {
  width: 200px;
  font-family: 'JetBrains Mono', monospace;
}
</style>
