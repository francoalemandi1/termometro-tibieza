<template>
<div class='block'>
  <h1 class='text-3xl text-center font-bold tracking-normal leading-relaxed p-2'>{{ flUppercaseResultType }}s destacadxs</h1>
  <div class='flex flex-wrap justify-center items-center'>
    <div v-for='celebrity in filtCelebrities' :key='celebrity' class='lg:w-1/4 border-1 border-solid p-8 m-8 rounded-md text-center shadow-2xl'>
      <img :src='celebrity.image' class='rounded-md h-72 w-full object-cover' />
      <p class='text-lg font-normal text-gray-400  my-4'>{{ celebrity.name }}</p>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from 'vue';
import useCelebrities from '../../store/celebrities/index.js'
  export default {
    props: {
      resultType: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const { resultType } = props;

      const flUppercaseResultType = computed(() => {
        let result = resultType;
        return result.charAt(0).toUpperCase() + result.slice(1);
      })


      const { celebrities } = useCelebrities();
      const filtCelebrities = computed(() => {
        let celebritiesCopy = celebrities.value;

        if(celebritiesCopy) {
          return celebritiesCopy.filter(el => el.type === resultType);
        }

        return celebritiesCopy;
      })

      return {
        resultType,
        flUppercaseResultType,
        celebrities,
        filtCelebrities
      }
    }
  }
</script>
