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

import ShareInSocialMedia from '../components/social-media/shareInSocialMedia.vue'

export default {
  components: { FinishedTest, Celebrities, ShareInSocialMedia },
  setup() {
    window.route = useRoute();

    const finishedData = reactive(route.params)

    const results = reactive({
      type: 'ají picante',
      personality: 'Javier Mascherano',
      image: 'https://i.imgur.com/dBzAKq2.jpg',
      description: 'Sos decidix, sostenes tus argumentos aunque el resto no esté de acuerdo. Tomas posición y la defendes. En situaciones difíciles sacas lo mejor de vos y cuando hay que mandarse te mandas. Si hubieses sido el Pipa Higuaín en el mundial de Brasil la clavabas al ángulo. Bien ahí!'  
    })

    return {
      ...toRefs(results),
      finishedData
    }
  }
}
</script>