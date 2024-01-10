import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useShopStore =defineStore('shop',()=>{

    const data = ref()

    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => data.value = json)
    .catch((error) => console.log('error :',error))
    return{data}
})