import { reactive, onMounted, toRefs } from 'vue';

const useDirectives = () => {
    const data = reactive({
      celebrities: null
    })
    const getCelebrities = async () => {
      const response = await fetch(`https://peaceful-hamlet-45136.herokuapp.com/celebrities`)
      const fetchedData = await response.json();
      if(response.status === 200) {
        data.celebrities = fetchedData.data
      } else {
        console.log('Something went wrong')
      }
    };
      
    onMounted(() => {
        getCelebrities();
    });
  
    return toRefs(data)
}

export default useDirectives;