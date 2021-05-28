<template>
  <div class="block lg:mt-4 lg:mb-2 lg:pt-8">
    <p class="text-center mb-2">Estás en la pregunta: {{ questionsAnswered + 1 }} de {{ questionsTotal }}</p>
    <div class="bg-gray-100 h-2 w-full py-2 mt-1 rounded-lg"></div>
    <div class="relative -top-4 bg-green-400 h-2 py-2 rounded-lg" :style="{ 'width': percentageCompleted + '%' }"></div>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
export default {
  props: {
    questionsTotal: {
      type: Number,
      required: true
    },
    questionsAnswered: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const { questionsTotal } = props;
    const answeredValue = ref(null)
    const percentageCompleted = computed(() => {
      let sum = answeredValue.value + 1;
      let total = questionsTotal;

      return (sum * 100) / total
    })

    watch(() => props.questionsAnswered, (firstValue, secondValue) => {
      let initialValue = 0 
      answeredValue.value = initialValue + firstValue;
    })

    return {
      answeredValue,
      percentageCompleted
    }
  }
}
</script>