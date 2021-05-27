import { reactive, onMounted, toRefs } from 'vue';

const uri = `${process.env.VUE_APP_APIURL}`;
console.log(uri)

const useDirectives = () => {
    const data = reactive({
      celebrities: null
    })
    const getCelebrities = async () => {
      const response = await fetch(`http://localhost:8080/celebrities`)
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