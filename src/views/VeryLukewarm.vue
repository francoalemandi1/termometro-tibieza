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
      type: 'muy tibix',
      personality: 'Ash Ketchup',
      image: 'https://i.imgur.com/v2yEQMm.jpg',
      description: 'Dubitativo por excelencia, aunque muy pero muy de vez en cuando cerras los ojos y le metes para adelante. Cuando se te ocurre algo inteligente al toque le encontras un "pero", y si conoces a gente que crees que sabe más que vos de algo te ensimizmas y te da pánico opinar. Te cuesta tomar decisiones y ahí es cuando empezas a encuestar a amigxs a ver qué piensan. Si no conoces a Chidi Anagonye, corre a ver The Good Place!'  
    })

    return {
      ...toRefs(results),
      finishedData
    }
  }
}
</script>