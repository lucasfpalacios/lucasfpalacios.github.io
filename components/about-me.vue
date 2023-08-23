<template>
  <div id="about" class="about-me d-flex flex-column mx-auto">
    <h1 class="about-me__title mx-auto">
      {{ $t('components.about.title') }}
    </h1>
    <b-row class="d-flex mx-auto my-5 w-100">
      <b-col class="about-me__description" cols="6">
        <h2 class="about-me__description__subtitle">
          {{ $t('components.about.meet-me') }}
        </h2>
        <p class="about-me__description__text" v-html="$t('components.about.description')" />
      </b-col>
      <b-col class="about-me__button d-flex justify-content-center align-items-center" cols="6">
        <b-button href="#footer" variant="outline-dark" @click="downloadFile">
          {{ $t('components.about.button') }}
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>
s
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import * as FileSaver from 'file-saver'

@Component

export default class extends Vue {
  downloadFile () {
    const fileURL = '/lucas-palacios-cv.pdf'
    FileSaver.saveAs(fileURL, 'lucas-palacios-cv.pdf')
  };
}
</script>

<style lang="scss">
.about-me {
  width: 2000px !important;
  font-family: 'JetBrains Mono', monospace;
  &__title {
    color: #0b82e4;
  }
  &__description {
    padding: 100px;
    &__subtitle{
      color: #0b82e4;
    }
  }
}
</style>
