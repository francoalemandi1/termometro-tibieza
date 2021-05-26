import { reactive, onMounted, toRefs } from 'vue';

const useDirectives = () => {
    const data = reactive({
      directives: null
    })
    const getDirectives = async () => {
      const response = await fetch('../../../db/celebrities.json')
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