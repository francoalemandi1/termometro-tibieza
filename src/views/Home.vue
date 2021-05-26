<template>
  <main-wrapper />
  <secondary-wrapper />
</template>

<script>
import MainWrapper from '../components/main/MainWrapper.vue'
import SecondaryWrapper from '../components/secondary/SecondaryWrapper.vue';

export default {
  components: { MainWrapper, SecondaryWrapper},
  name: 'Home',
}
</script>
