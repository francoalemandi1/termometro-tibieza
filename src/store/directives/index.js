import { reactive, onMounted, toRefs } from 'vue';

const uri = new URL("../../../db/directives.json", document.baseURI).href
//=> "https://stackoverflow.com/questions/mypath"

console.log(uri)

const useDirectives = () => {
    const data = reactive({
      directives: null
    })
    const getDirectives = async () => {
      const response = await fetch(uri)
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