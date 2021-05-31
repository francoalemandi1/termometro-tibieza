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
      type: 'tibix',
      personality: 'la pifiada de Higuaín en la final del mundial',
      image: 'https://i.imgur.com/f1T6idr.jpg',
      description: 'Sos tan tibix que hasta para el test salís en el centro. Tratas de quedar bien con Dios y con el Diablo y casi nunca te la jugas. Podes autopercibirte como de izquierda o de derecha, pero en la práctica sos de centro. Podrías estar meses saliendo con alguien y no animarte a definir la relación.'  
    })

    return {
      ...toRefs(results),
      finishedData
    }
  }
}
</script>