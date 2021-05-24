<template>
<div class='block lg:flex mx-4 lg:px-4 text-center lg:text-left'>
  <div class="lg:w-1/2 block lg:flex m-6 lg:p-6">
    <div class='block text-center'>
      <h1 class='text-3xl font-bold tracking-normal my-4 leading-relaxed py-4'>{{ firstName }} {{ lastName }}, el termómetro te dio en {{ percentage }} grados</h1>
      <termometer :termWidth='parseInt(percentage)' />
      <p class='text-lg font-normal text-gray-400'>Por lo que estás:</p>
      <h1 class='text-3xl font-bold tracking-normal leading-relaxed uppercase'>{{ resultType }}</h1>
      <h1 class='text-2xl font-bold tracking-normal leading-relaxed my-4'>Qué significa ser {{ resultType }}?</h1>
      <p class='text-lg tracking-normal leading-relaxed'>{{ description }}</p>
    </div>
  </div>
  <div class="lg:w-1/2 block lg:flex m-6 p-6">
    <div class='block'>
      <h1 class='text-3xl text-center  font-bold tracking-normal my-4 leading-relaxed py-4'>Te identificas con: {{ personality }}</h1>
      <img :src='image' class='w-full max-w-full h-96 max-h-full mx-auto my-0 object-cover rounded-md' />
    </div>
  </div>
</div>
</template>

<script>

import termometer from '../../assets/termometer.vue';
  export default {
    components: { termometer },
    props: {
      finishedData: {
        type: Object,
        required: true
      },
      resultType: {
        type: String,
        required: true,
      },
      personality: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const { percentage, firstName, lastName } = props.finishedData;

      return {
        percentage,
        firstName,
        lastName
      }
    }
  }
</script>
