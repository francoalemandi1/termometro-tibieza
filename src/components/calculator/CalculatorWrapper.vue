<template>
<div class='block lg:flex'>
  <test-type v-if='!isStarted' 
             @test-start='onTestStart' 
             @personal-data='onPersonalData'
  />
  <questions v-if='isStarted' 
             :questions='filtQuestions' 
             :total-points='totalPoints'
             :first-name='firstName'
             :last-name='lastName'
  />
</div>
</template>

<script>
import Questions from './Questions.vue'
import TestType from './TestType.vue'

import useQuestionsAndAnswers from '../../store/questions/index.js'
import { ref, reactive, toRefs, computed, onMounted } from 'vue';

export default {
  components: { Questions, TestType },

  setup() {
    const { questions }  = useQuestionsAndAnswers();
    const filtQuestions = computed(() => {
      let questionsCopy = questions;

      if(test.type === 'quick') {
        let quickQuest = questionsCopy.filter(q => q.quick === true);

        return quickQuest;
      }

      return questionsCopy;
    })

    const totalPoints = computed(() => {
      let questionsCopy = filtQuestions.value;

      if(questionsCopy.length > 0) {
        let sum = questionsCopy
          .map(el => el.total)
          .reduce((a, b) => a + b);

        return sum
      }
    })

    const test = reactive({
      type: '',
      isStarted: false
    });
    const onTestStart = (type, bool) => {
      test.type = type;
      test.isStarted = bool;
    }

    const firstName = ref('');
    const lastName = ref('');
    const onPersonalData = (first, last) => {
      firstName.value = first;
      lastName.value = last;
    }

    return {
      ...toRefs(test), 
      firstName,
      lastName,
      questions, 
      filtQuestions, 
      onTestStart, 
      totalPoints,
      onPersonalData
    }
  }
}
</script>
