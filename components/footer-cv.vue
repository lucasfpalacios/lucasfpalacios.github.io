<template>
  <div id="footer" class="cv-footer py-5 text-bold">
    <b-row>
      <b-col>
        <h2 class="text-white text-center">
          {{ $t('components.footer.contact.list.media') }}
        </h2>
        <div class="icons text-center my-5">
          <b-link href="https://www.linkedin.com/in/lucas-facundo-palacios-front-end-developer/" class="icon icon--linkedin">
            <i class="fa-brands fa-linkedin" />
          </b-link>
          <b-link href="https://web.whatsapp.com/" class="icon icon--whatsapp mx-5">
            <i class="fa-brands fa-whatsapp" />
          </b-link>
          <b-link href="https://github.com/lucasfpalacios" class="icon icon--github">
            <i class="fa-brands fa-github" />
          </b-link>
          <b-link href="https://www.google.com/intl/es-419/gmail/about/" class="icon icon--mail mx-5">
            <i class="fa-solid fa-envelope" />
          </b-link>
          <b-link href="https://web.telegram.org/k/" class="icon icon--telegram">
            <i class="fa-brands fa-telegram" />
          </b-link>
        </div>
        <p class="text-white text-center">
          {{ $t('components.footer.goodbye') }}
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
.cv-footer {
  background: url('../assets/japan-bg.png') center/cover no-repeat;
  font-family: 'JetBrains Mono', monospace;
}
.arrow {
  width: 40px;
  height: 40px;
  font-size: 80px;
  text-decoration: none !important;
  color: #fff !important;
}

.icons {
  column-gap: 25px;
}

.icon {
    display: inline-flex;
    justify-content: space-between;
    width: 60px;
    height: 60px;
    text-decoration: none !important;
    font-size: 26px;
    color: #fff !important;
    border-radius: 50%;
    outline: 2px solid #fff;
    transition-property: outline-offset, outline-color, background-color;
    transition-duration: 0.25s;
  }
.icon:hover {
    outline-offset: 4px;
  }

.icon i {
  margin: auto;
}

.icon:hover i {
  animation: shake 0.25s;
}
.icon--linkedin:hover {
  background-color: #0077b5;
  outline-color: #0077b5;
}

.icon--whatsapp:hover {
  background-color: #2ea44f;
  outline-color: #2ea44f;
}

.icon--github:hover {
  background-color: #000000;
  outline-color: #000000;
}

.icon--mail:hover {
  background-color: #aec200;
  outline-color: #aec200;
}

.icon--telegram:hover {
  background-color: #03e8f0;
  outline-color: #03e8f0;
}

@keyframes shake {
  10% {
    transform: rotate(15deg);
  }
  20% {
    transform: rotate(-15deg);
  }
  30% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-15deg);
  }
}
</style>
