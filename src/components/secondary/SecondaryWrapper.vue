<template>
  <div class="pt-8 mx-4 lg:mx-0">
    <div>
      <secondary-title />
    </div>
    <div class="lg:pt-4 lg:flex justify-center items-center">
      <termometer-home-svg class='hidden lg:flex' />
      <secondary-description />
    </div>
  </div>
</template>

<script>
import SecondaryDescription from "./SecondaryDescription.vue"
import SecondaryTitle from "./SecondaryTitle.vue"
import TermometerHomeSvg from '../../assets/termometerHomeSvg.vue'

  export default {
    components: { SecondaryDescription, SecondaryTitle, TermometerHomeSvg }
  }
</script>