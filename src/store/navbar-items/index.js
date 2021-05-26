import { toRefs, reactive, onMounted } from 'vue'

const uri = new URL("../../../db/items.json", document.baseURI).href
//=> "https://stackoverflow.com/questions/mypath"

console.log(uri)

const useNavbarItems = () => {
  const data = reactive({
    items: null
  })
  const getNavbarItems = async () => {
    const response = await fetch(uri)
    const fetchedData = await response.json();
    if(response.status === 200) {
      data.items = fetchedData.data
    } else {
      console.log('Something went wrong')
    }
  };
    
  onMounted(() => {
    getNavbarItems();
  });

  return toRefs(data)
}
export default useNavbarItems;

