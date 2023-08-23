<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/nav-bar.vue'
import Footer from '~/components/footer-cv.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
