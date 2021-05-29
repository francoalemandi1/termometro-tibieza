<template>
  <div class='lg:flex'>
    <div class='lg:w-1/12'></div>
    <div class='lg:w-10/12 block lg:flex lg:justify-between text-center lg:p-8'>
      <router-link to='/' class='lg:flex justify-center hidden'>
        <therm-logo-svg />
        <p class='lg:text-base text-lg font-bold mt-1 mx-2 text-indigo-500'>Tibieterm!</p>
      </router-link>
      <div class="lg:flex lg:justify-between" :class="open ? 'block absolute h-48 w-full bg-white mt-8' : 'hidden'">
        <router-link to='/' class='lg:hidden lg:justify-center'>
          <p class='lg:text-base text-lg font-bold mb-2 mx-2 text-indigo-500'>Inicio</p>
        </router-link>
        <ul v-for='item in items' :key='item' class='lg:py-0 py-4'>
          <router-link :to='item.navigate' @click="open = false" class='flex justify-center items-center px-4'>
            <test-icon v-if='item.icon === "termometer"' />
            <suggestion-icon v-if='item.icon === "suggestion"' />
            <div  class="px-2 lg:text-base text-lg font-bold text-indigo-500" >
              {{ item.item }}
            </div>
          </router-link>
        </ul>
      </div>

      <!-- Burguer menu  -->
      <div class="flex justify-end lg:hidden">
        <div class="relative py-3 sm:max-w-xl px-4">
          <nav x-data="{ open: false }">
            <button class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" @click="open = !open">
              <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </div>
    <div class='lg:w-1/12'></div>
  </div>
</template>

<script>
import useNavbarItems from '../../store/navbar-items/index.js';
import { ref } from 'vue'
import testIcon from '../../assets/testSvg.vue'
import suggestionIcon from '../../assets/suggestionSvg.vue'
import ThermLogoSvg from '../../assets/thermLogoSvg.vue'

export default {
  components: { testIcon, suggestionIcon, ThermLogoSvg },
  setup() {
    const { items } = useNavbarItems();
    
    const open = ref(false);

    return {
      items,
      open
    }
  }
}
</script>