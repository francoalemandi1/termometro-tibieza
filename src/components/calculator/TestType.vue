<template>
  <div class='block lg:flex lg:m-8 lg:p-8 px-8 text-center lg:text-left'>
    <div class='lg:w-1/12'></div>
    <div class='w-full lg:w-5/12 lg:mx-4 lg:p-0'>
      <h1 class='text-xl font-normal font-bold my-4 mb-5'>Sobre el termómetro de tibieza</h1>
      <p class='text-lg font-normal text-gray-800 mb-4 lg:mb-0'>Te tomará entre 8 y 10 minutos hacerlo. El test rápido tiene 10 preguntas, mientras que el test completo tiene 15. Te recomiendo que hagas el completo, ya que es más preciso y muestra más memes. Pero, obviamente, your choice.</p>
    </div>
    <div class='w-full lg:w-5/12 tex-center lg:text-left lg:mx-4'>
      <h3 class='py-4 text-xl font-normal font-bold'>Ingresá tus datos y el tipo de test que querés realizar:</h3>
      <p v-if='incompleted' class='text-sm text-red-400'>Recordá completar todos los campos y seleccionar el tipo de test!</p>
      <div class='block lg:flex lg:mb-4 lg:mt-2'>
        <div class='block lg:mb-4 mb-2 lg:pr-4 p-4 lg:p-0'>
          <input type='text' placeholder='Nombre / Apodo' id='first-name' name='first-name' v-model='firstName' required class='w-full border-2 border-solid border-gray-200 rounded-md px-4 py-3'/>
        </div>
        <div class='block p-4 lg:p-0'>
          <input type='text' placeholder='Apellido / Apodo' id='last-name' name='last-name' v-model='lastName' required class='w-full border-2 border-solid border-gray-200 rounded-md px-4 py-3'/>
        </div>
      </div>

      <div class='block lg:mt-0 mt-6'>
        <div class='text-xl font-normal font-bold'>Tipo de test</div>
        <div class='flex justify-center lg:justify-start'>
          <div class='lg:mr-8 lg:px-0 px-4'>
            <button @click="selected('quick')" :class="{ 'bg-green-400 text-white hover:bg-green-400': testType === 'quick' }" class='border-2 border-gray-200 hover:bg-gray-50 border-solid mt-4 p-3 rounded-md text-black'>Test rápido</button>
          </div>
          <div class='lg:ml-8 lg:px-0 px-4'>
            <button @click="selected('full')" :class="{ 'bg-green-400 text-white hover:bg-green-400': testType === 'full' }" class='border-2 border-gray-200 hover:bg-gray-50 mt-4 p-3 rounded-md text-black'>Test completo</button>
          </div>
        </div>
        <p class='w-full lg:w-3/4 text-sm text-center lg:text-left mt-4 italic p-2 lg:p-0'>Nota: estos datos son simplemente para generarte el certificado de tibieza al finalizar el test.</p>
      </div>
      <main-button @click='start()' class='w-10/12 mt-4 py-4 uppercase tracking-normal leading-relaxed' text='¡Empezar el test!' bgColor='bg-indigo-400 hover:bg-indigo-500' textColor='text-white' />
    </div>
    <div class='w-1/12'></div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from 'vue';
import MainButton from '../shared/MainButton.vue';

export default {
  components: { MainButton },
  setup(props, { emit }) {
    const firstName = ref('');
    const lastName = ref('');

    const testType = ref('');
    const selected = (type) => {
      testType.value = type;
    }

    const incompleted = ref(false);
    const start = () => {
      // const { firstName, lastName } = personalData;
      if(firstName.value === '' || lastName.value === '' || testType.value === '') {
        incompleted.value = true;
      } else {
        emit('personal-data', firstName.value, lastName.value)
        emit('test-start', testType.value, true)
      }
    }

    return {
      firstName,
      lastName, 
      testType, 
      selected, 
      start, 
      incompleted
    }
  }  
}
</script>
