import { reactive, onMounted, toRefs } from 'vue';

const useDirectives = () => {
    const data = reactive({
      directives: null
    })
    const getDirectives = async () => {
      const response = await fetch(`https://peaceful-hamlet-45136.herokuapp.com/directives`)
      const fetchedData = await response.json();
      if(response.status === 200) {
        data.directives = fetchedData.data
      } else {
        console.log('Something went wrong')
      }
    };
      
    onMounted(() => {
      getDirectives();
    });
  
    return toRefs(data)
}

export default useDirectives;