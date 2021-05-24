<template>
  <finished-test 
    :finishedData='finishedData' 
    :resultType='type' 
    :personality='personality' 
    :description='description'
    :image='image'
  />
  <celebrities :resultType='type' />
</template>

<script>
import { useRoute } from 'vue-router';
import { reactive, toRefs } from 'vue';
import FinishedTest from '../components/calculator/FinishedTest.vue'
import Celebrities from '../components/finished/FinishedCelebrities.vue';
export default {
  components: { FinishedTest, Celebrities },
  setup() {
    window.route = useRoute();

    const finishedData = reactive(route.params)

    const results = reactive({
      type: 'muy tibio',
      personality: 'Alberto Fernandez',
      image: 'src/assets/alberto.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quis vel non culpa error facere fugit repellat alias neque, quas ea dicta tenetur, fugiat eaque libero quaerat natus? Officia, placeat?'  
    })

    return {
      ...toRefs(results),
      finishedData
    }
  }
}
</script>