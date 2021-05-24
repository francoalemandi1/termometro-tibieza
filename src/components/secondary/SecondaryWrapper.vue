<template>
  <div class="pt-8 mx-4 lg:mx-0">
    <div>
      <secondary-title />
    </div>
    <div class="pt-4 lg:flex justify-center items-center">
      <img src='../../assets/harry.jpeg' class='h-80 rounded-md lg:flex hidden' />
      <secondary-description />
    </div>
  </div>
</template>

<script>
import SecondaryDescription from "./SecondaryDescription.vue"
import SecondaryTitle from "./SecondaryTitle.vue"

  export default {
    components: { SecondaryDescription, SecondaryTitle }
  }
</script>