import { reactive, onMounted } from 'vue';

const useQuestionsAndAnswers = () => {
    const questions = reactive([])
    const getQuestionsAndAnswers = async () => {
      const response = await fetch(`https://peaceful-hamlet-45136.herokuapp.com/questions`)
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