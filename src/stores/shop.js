import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useShopStore =defineStore('shop',()=>{

    const data = ref()
    
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((res) => res.json())
    .then((json) => data.value = json)
    .catch((error) => console.log('error :',error));


    const cat = ref()

    fetch('https://api.escuelajs.co/api/v1/categories')
    .then((res) => res.json())
    .then((json) => cat.value = json)
    .catch((error) => console.log('error :',error));
    // console.log(cat);


    return{data,cat}
})