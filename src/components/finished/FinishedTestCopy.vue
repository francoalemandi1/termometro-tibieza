<template>
<div class='test flex'>
  <div class="w-1/2 flex m-6 p-6">
    <div class='block text-center'>
      <h1 class='text-3xl font-bold tracking-normal my-4 leading-relaxed py-4'>Pepe itaca, sos un {{ percentage }}% tibix</h1>
      <termometer :termWidth='parseInt(percentage)' />
      <h1 class='text-3xl font-bold tracking-normal leading-relaxed uppercase'>tibiazo</h1>
      <h1 class='text-2xl font-bold tracking-normal leading-relaxed my-4'>Qué significa ser tibiazo?</h1>
      <p class='text-left text-lg tracking-normal leading-relaxed'>Estás jugando esa partida muy peleada de League of Legends y siempre la pechas, te matan, y tu equipo pierda por culpa tuya. Eso pasa porque, básicamente, cagoneas en los momentos importantes. Cuando das una opinión siempre te atajas: "Te digo nomas, eh. Es mi opinión, pero vos hacé lo que quieras". Y sí, dudas de vos mismx una banda. Sos extrovertidx con un máximo de 4 personas, más ya es multitud y te ensimizmas.</p>
    </div>
  </div>
  <div class="w-1/2 flex m-6 p-6">
    <div class='block'>
      <h1 class='text-3xl text-center  font-bold tracking-normal my-4 leading-relaxed py-4'>Te identificas con: Cristina Kirchner</h1>
      <img src='../../assets/cristina.jpeg' class='rounded-md' />
    </div>
  </div>
</div>
</template>

<script>

import termometer from '../../assets/termometer.vue';
  export default {
    components: { termometer },
    props: {
      percentage: {
        type: String,
        required: true
      }
    },
  }
</script>
