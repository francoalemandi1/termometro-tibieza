import { toRefs, reactive, onMounted } from 'vue'

const uri = `${process.env.API_URL}/${process.env.PORT}`;

const useNavbarItems = () => {
  const data = reactive({
    items: null
  })
  const getNavbarItems = async () => {
    const response = await fetch(`http://localhost:8080/items`)
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

