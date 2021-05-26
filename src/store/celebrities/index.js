import { reactive, onMounted, toRefs } from 'vue';

const uri = new URL("../../../db/celebrities.json", document.baseURI).href
//=> "https://stackoverflow.com/questions/mypath"

console.log(uri)


const useDirectives = () => {
    const data = reactive({
      celebrities: null
    })
    const getCelebrities = async () => {
      const response = await fetch(uri)
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