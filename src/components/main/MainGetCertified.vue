<template>
  <section class="lg:max-w-4xl mx-4">
    <h1 class="lg:text-4xl text-2xl font-bold tracking-normal lg:mt-4 my-4 mx-4 lg:px-0 leading-relaxed">
      Sacá tu certificado de tibieza!
    </h1>
    <h4 class="text-xl font-normal text-gray-800 lg:mt-4 my-4 mx-4 lg:px-0">
      Respondé las preguntas y fijate qué resultados obtenes. Es un ratito! No te va a llevar más de 10 minutos.
    </h4>
    <router-link to='/test'>
      <main-button class="w-1/2 lg:w-1/3 my-4 hover:bg-indigo-500" text='Hacé el test' textColor='text-white' bgColor='bg-indigo-400' />
    </router-link>
  </section>
</template>

<script>
import MainButton from '../shared/MainButton.vue'
export default {
  components: { MainButton }
}
</script>