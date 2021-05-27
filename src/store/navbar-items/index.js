import { toRefs, reactive, onMounted } from 'vue';

const useNavbarItems = () => {
  const data = reactive({
    items: null
  })
  const getNavbarItems = async () => {
    const response = await fetch(`https://peaceful-hamlet-45136.herokuapp.com/items`)
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

