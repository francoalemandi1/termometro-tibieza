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
import FinishedTest from '../components/calculator/FinishedTest.vue';
import Celebrities from '../components/finished/FinishedCelebrities.vue';
import ShareInSocialMedia from '../components/social-media/shareInSocialMedia.vue';

export default {
  components: { FinishedTest, Celebrities, ShareInSocialMedia},
  setup() {
    window.route = useRoute();

    const finishedData = reactive(route.params)

    const results = reactive({
      type: 'barrilete cósmicx',
      personality: 'El Comandante Ricardo Fort',
      image: 'https://i.imgur.com/Qx58eqn.jpg',
      description: 'Hay dos posibilidades si llegaste a esta sección: a) mentiste descaradamente, b) sos la reencarnación del Comandante. Si le tenes que decir a alguien que saque la mano de ahí carajo, se lo decís. En fin, si no hubiese estado el Diego contra los ingleses, hubieses estado vos. Nada más para decir: mis respetos.'  
    })

    return {
      ...toRefs(results),
      finishedData
    }
  }
}
</script>