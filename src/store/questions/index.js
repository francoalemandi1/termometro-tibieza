import { reactive, onMounted } from 'vue';

const uri = `${process.env.API_URL}/${process.env.PORT}`;

const useQuestionsAndAnswers = () => {
    const questions = reactive([])
    const getQuestionsAndAnswers = async () => {
      const response = await fetch(`http://localhost:8080/questions`)
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