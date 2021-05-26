<template>
  <navbar-list />
  <router-view />
  <footer-wrapper />
</template>

<script>
import NavbarList from './components/navbar/NavbarList.vue'
import FooterWrapper from './components/footer/FooterWrapper.vue'
export default {
  components: { NavbarList, FooterWrapper },
  name: 'App',
}
</script>

<style>
  #app {
    background-color: #fff;
  }
</style>
