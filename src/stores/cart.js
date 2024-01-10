import { defineStore } from "pinia";
import { ref } from "vue";
export const useCartStore =defineStore('cart',()=>{

const cartValue = ref([])

const addCart = (jsItem)=>{
    const insideItem = cartValue.value.find((cartItem) => cartItem.jsItem.vueItem.id == jsItem.vueItem.id);
    if ( !insideItem ) {
        cartValue.value.push({jsItem});
        localStorage.setItem('items', JSON.stringify(cartValue.value))
    } 
}

const removeCart = (items) => {
    const findRemove = cartValue.value.findIndex((cartItem) => cartItem.jsItem.vueItem.id == items.jsItem.vueItem.id);
    if (findRemove !== -1) {
        cartValue.value.splice(findRemove, 1);
        localStorage.setItem('items', JSON.stringify(cartValue.value))
    }
    // cartValue.value = cartValue.value.filter((cartItem) =>cartItem.jsItem.vueItem.id !== items.jsItem.vueItem.id)
};

const localValue= localStorage.getItem('items')

if(localValue){
    cartValue.value = JSON.parse(localValue)
}

const re =()=>{
    localStorage.clear()
}

return{cartValue,addCart,removeCart,re}

})