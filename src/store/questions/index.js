import { reactive, onMounted } from 'vue';
import questionsDb from '../../../public/db/questions.json';

const useQuestionsAndAnswers = () => {
    const questions = reactive([])
    const getQuestionsAndAnswers = async () => {
      const response = await fetch(questionsDb)
      const fetchedData = await response.json();
      if(response.status === 200) {
        fetchedData.data.forEach(obj => questions.push(obj))
      } else {
        console.log('Something went wrong')
      }
    };
      
    onMounted(() => {
      getQuestionsAndAnswers();
    });

    return { questions }
}

export default useQuestionsAndAnswers;