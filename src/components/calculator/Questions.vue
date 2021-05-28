<template>
  <div v-if='!isFinished' class="block">
    <div class='flex'>
      <div class='lg:flex hidden w-4/12'>
        <calc-directives />
      </div>
      <div class='w-full lg:w-8/12 lg:mx-8 lg:px-8 px-4 mx-4'>
        <answered-questions-counter :questionsTotal='questions.length' :questionsAnswered='questionNumber' />
        <div class='flex'>
          <div class="block w-full lg:w-8/12 lg:mr-4">
            <div class="lg:mr-8">
              <h1 class='py-4 font-bold text-xl text-left ml-8'>{{ question.question }}</h1>
            </div>
            <ul class=''>
              <div v-for='answer in question.answers' :key='answer.id' :id='question.id' class="flex" >
                <label class="radio radio-before" :for='answer.slug'>
                  <span class="radio__input flex justify-center items-center">
                    <input type='radio' name='answers' @change='handleInputChanges(answer.points, answer.slug)' :id='answer.slug' />
                    <span class="radio__control"></span>
                  </span>
                  <span class="radio__label lg:mx-4 my-3 ml-4 mr-2 lg:text-base text-lg " :style="selectedAnswer === answer.slug ? 'transform: scale(1.02); opacity: 1;font-weight: 800;' : ''">
                    {{ answer.answer }}
                  </span>
                </label>
              </div>
              <div v-if='isAnswerNotSelected' class='text-red-400'>
                Recordá que es obligatorio seleccionar una de las opciones!
              </div>
            </ul>
            <div class="flex justify-center mt-8">
              <main-button @click='prevQuestion()' class='mx-4 border-solid border-2 border-gray-300 hover:bg-gray-50' text='Anterior' textColor='text-black' bgColor='bg-transparent' />
              <main-button @click='nextQuestion()' class="mx-4 hover:bg-blue-500" text='Siguiente' bgColor='bg-blue-400' textColor='text-white' />
            </div> 
          </div>
          <div class='lg:flex hidden lg:w-4/12 mt-4'>
            <img :src='question.image' class='rounded-lg h-60 object-cover' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnsweredQuestionsCounter from './AnsweredQuestionsCounter.vue'
import CalcDirectives from './CalcDirectives.vue'
import { ref, computed, reactive, toRefs, inject } from 'vue'
import MainButton from '../shared/MainButton.vue'
import { useRouter } from 'vue-router';

export default {
  components: { AnsweredQuestionsCounter, MainButton, CalcDirectives },
  props: {
    questions: {
      type: Array,
      default: () => []
    },
    totalPoints: {
      type: Number,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },

  setup(props, { emit }) {
    const { questions, totalPoints, firstName, lastName } = props;

    const current = reactive({
      questionNumber: 0,
      answerNumber: 0
    })
    const question = computed(() => {
      let questionsCopy = questions;
      if(questionsCopy.length > 0) {
        let obj = questionsCopy[current.questionNumber];

        return obj;
      }
      return;
    })
    const answer = computed(() => {
      let questionsCopy = questions;
      if(questionsCopy.length > 0) {
        let question = questionsCopy[current.questionNumber];
        let answer = question.answers[current.answerValue]

        return answer;
      }
      return;
    });

    const isFinished = ref(false);
    const points = reactive({
      amount: null,
      list: [],
      earned: null
    })
    const percentage = computed(() => {
      let pointsCopy = points.earned;
      let totalPointsCopy = totalPoints;

      let result = pointsCopy * 100 / totalPointsCopy

      return parseInt(result);
    })

    const handleInputChanges = (amount, selected) => {
      if(selected) isAnswerNotSelected.value = false;

      points.amount = amount;
      selectedAnswer.value = selected;
    }

    window.router = useRouter();
    const goToCustomRoute = () => {
      let perc = percentage.value;
      let percentages = {
        coldPerc: perc <= 20,
        veryLukewarmPerc: perc > 20 && perc <= 40,
        lukeWarmPerc: perc > 40 && perc <= 60,
        crackPerc: perc > 60 && perc <= 80,
        veryCrackPerc: perc > 80 && perc <= 100
      }
      let paramsProps = {
        percentage: percentage.value,
        firstName: firstName,
        lastName: lastName
      };
      if(percentages.coldPerc) router.push({ name: 'helado', params: paramsProps, props: true })
      if(percentages.veryLukewarmPerc) router.push({ name: 'muy-tibix', params: paramsProps, props: true })
      if(percentages.lukeWarmPerc) router.push({ name: 'tibix', params: paramsProps, props: true })
      if(percentages.crackPerc) router.push({ name: 'sos-imprescindible', params: paramsProps, props: true })
      if(percentages.veryCrackPerc) router.push({ name: 'unx-en-un-millon', params: paramsProps, props: true })
    }

    const selectedAnswer = ref(null);
    const isAnswerNotSelected = ref(false);
    const nextQuestion = () => {
      if(selectedAnswer.value === null) { 
        isAnswerNotSelected.value = true; 
        return; 
      } else {
        selectedAnswer.value = null;
        isAnswerNotSelected.value = false;
        current.questionNumber++

        // Calculo del total de puntos acumulados.
        points.list.push(points.amount);
        points.earned = points.list.reduce((a, b) => a + b)
      }

      if(current.questionNumber === questions.length) {
        isFinished.value = true;
        goToCustomRoute();
      }
    }
    const prevQuestion = () => {
      if(isAnswerNotSelected.value) isAnswerNotSelected.value = false; selectedAnswer.value = null;
      if(current.questionNumber > 0) current.questionNumber--

      // Calculo de la resta de los puntos acumulados.
      points.list.pop();
      points.earned = points.list.reduce((a, b) => a + b)
    }

    return { 
      ...toRefs(current), 
      ...toRefs(points), 
      nextQuestion, 
      prevQuestion, 
      question, 
      answer, 
      totalPoints,
      percentage,
      isFinished,
      firstName,
      lastName,
      goToCustomRoute,
      selectedAnswer,
      isAnswerNotSelected,
      handleInputChanges
    }
  }
}
</script>

<style lang='scss' scoped>
.radio {
  display: grid;
  grid-template-columns: min-content auto;
}

.radio__label {
  transition: 180ms all ease-in-out;
  opacity: 0.8;
}

.radio__input {
  display: flex;

  input {
    opacity: 0;
    width: 0;
    height: 0; 

    &:focus + .radio__control {
      box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em #fff;
    }
  }
}

.radio-before {
  .radio__control {
    display: grid;
    place-items: center;
  }

  input + .radio__control::before {
    content: "";
    width: 0.5em;
    height: 0.5em;
    box-shadow: inset 0.5em 0.5em rgba(96, 165, 250);
    border-radius: 50%;
    transition: 180ms transform ease-in-out;
    transform: scale(0);
  }

  input:checked + .radio__control::before {
    transform: scale(1.25);
  }
}

.radio__control {
  display: block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.1em solid currentColor;
  transform: translateY(-0.05em);
}
</style>
