<template>
  <finished-test 
    :finishedData='finishedData' 
    :resultType='type' 
    :personality='personality' 
    :description='description'
    :image='image'
  />
  <celebrities :resultType='type' />
  <share-in-social-media />
</template>

<script>
import { useRoute } from 'vue-router';
import { reactive, toRefs } from 'vue';
import FinishedTest from '../components/calculator/FinishedTest.vue'
import Celebrities from '../components/finished/FinishedCelebrities.vue';
import ShareInSocialMedia from '../components/social-media/shareInSocialMedia.vue';

export default {
  components: { FinishedTest, Celebrities, ShareInSocialMedia },
  setup() {
    window.route = useRoute();

    const finishedData = reactive(route.params)

    const results = reactive({
      type: 'pecho frío',
      personality: 'Gonzalo Higuaín',
      image: 'src/assets/higuaingol.jpeg',
      description: 'Hubieses errado tantos goles como el Pipa Higuaín. Se te congela el pecho en los momentos importantes: pateas finales hasta el último turno, suavizas todo por las dudas a alguien le caiga mal lo que decís, le pones chucker al mate y demasiada azúcar al café. Dejate de joder, espero que los "pechos fríos destacadxs" te ayuden a recapacitar.'  
    })

    return {
      ...toRefs(results),
      finishedData
    }
  }
}
</script>