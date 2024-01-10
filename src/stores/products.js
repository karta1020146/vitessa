import {ref} from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import {useRoute} from'vue-router' 

export const useProductsStore =defineStore('products',async ()=>{
    const fetchData = ref()
    const filterData = ref()
    const store = useRoute()
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            fetchData.value = res.data
            filterData.value = fetchData.value.filter( obj => obj.id == store.params.id )
            // console.log('1.fetchData',fetchData);
            // console.log('2.filterData',filterData);
        } catch (error) {
            console.log('error : ',error);
        }
    
    // fetch('https://fakestoreapi.com/products')
    // .then((res) => res.json())
    // .then((json) => data.value = json)
    // .catch((error) => console.log('error :',error))

    return{fetchData,filterData}
})