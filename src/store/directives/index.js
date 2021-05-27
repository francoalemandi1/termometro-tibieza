import { reactive, onMounted, toRefs } from 'vue';

const uri = `${process.env.API_URL}/${process.env.PORT}`;


const useDirectives = () => {
    const data = reactive({
      directives: null
    })
    const getDirectives = async () => {
      const response = await fetch(`http://localhost:8080/directives`)
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