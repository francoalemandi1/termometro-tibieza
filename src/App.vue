<template>
  <navbar-list />
  <router-view />
</template>

<script>
import NavbarList from './components/navbar/NavbarList.vue'

export default {
  components: { NavbarList },
  name: 'App',
}
</script>

<style>
  #app {
    background-color: #fff;
  }
</style>
