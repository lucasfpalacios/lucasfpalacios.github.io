<template>
  <div id="incio" class="nav-bar">
    <b-navbar toggleable="lg" type="dark">
      <div class="my-3">
        <b-navbar-brand href="#inicio" class="item">
          {{ $t('components.nav-bar.title') }}
        </b-navbar-brand>
        <b-navbar-brand href="#about" class="item">
          {{ $t('components.nav-bar.about') }}
        </b-navbar-brand>
        <b-navbar-brand href="#" class="item">
          {{ $t('components.nav-bar.skills') }}
        </b-navbar-brand>
        <b-navbar-brand href="#" class="item">
          {{ $t('components.nav-bar.projects') }}
        </b-navbar-brand>
      </div>
    </b-navbar>
  </div>
</template>

<style lang="scss">
.nav-bar {
  opacity: 20px;
  width: 100%;
  position: fixed;
  font-family: 'JetBrains Mono', monospace;
  background-color: rgba(0, 0, 0, 0.5);
}

.item:hover {
  animation: shake 0.20s;
  }

</style>
