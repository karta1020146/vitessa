<script setup>
    import { useCartStore } from "../stores/cart";
    import { storeToRefs } from "pinia";
    import { ref,computed,watch } from "vue";
    import { useToogle } from "../composables/toogle";
    const {toogleFunction} = useToogle()
    const cartStore = useCartStore()
    const {cartValue} =storeToRefs(cartStore)
    const {removeCart,re} = cartStore
    const props = defineProps(['isClose'])
    const emit = defineEmits(['toogleClose'])

    const removeItem =(items)=>{
        cartStore.removeCart(items)
    }

    const totalAmount = computed(() => {
        return cartValue.value.reduce((accumulator, items) => accumulator + items.jsItem.counts * items.jsItem.vueItem.price, 0);
    }); // 購物車總金額 

    const rrr =()=>{
        cartStore.re()
    } //釋放localStorage
</script>

<template>
    <Transition>
        <div class="cart" v-show="props.isClose">
            <button @click="rrr">-</button>
            <h1 style="text-align: center;">This is CartPage</h1>
            <button class="close" @click="$emit('toogleClose')">X</button>
            <div class="table">
                <table >
                    <thead>
                        <tr> 
                            <td style="width: 5%;">No .</td> 
                            <td style="width: 7%;">Picture</td> 
                            <td style="width: 65%;text-align: left; padding:0 0 0 1% ;">Name</td> 
                            <td style="width: 7%;">Count</td> 
                            <td style="width: 7%;">Price</td>
                            <td style="width: 5%;">Total</td>
                        </tr>
                    </thead>
                    <tr v-for="(items,index) in cartValue"
                        :key="items.jsItem.id"  
                        style="height: 120px;" >
                        <td >{{ index +1 }}</td>
                        <td >
                            <img :src="items.jsItem.vueItem.image" alt=""></td>
                        <td style="text-align: left; padding:0 0 0 1% ;">
                            {{ items.jsItem.vueItem.title }}
                        </td>
                        <td >{{ items.jsItem.counts }}</td>
                        <td >{{ items.jsItem.vueItem.price }}</td>
                        <td>
                            {{ items.jsItem.counts * items.jsItem.vueItem.price }}
                        </td>
                        <td class="tdCan">
                            <img src="../assets/can.svg" class="can"   alt="can_image" @click="removeItem(items)">
                        </td>
                        <!-- <p>total : {{ items.jsItem.counts * items.jsItem.vueItem.price  }}</p> -->
                    </tr>
                </table>
            </div>
            <h2 class="total">Total : US$ {{ totalAmount }}</h2>
        </div>
    </Transition>
</template>

<style scoped>

.v-leave-from{
    opacity: 1;
}
.v-leave-active{
    transition:opacity .3s ease;
}
.v-leave-to{
    opacity: 0;
}

.v-enter-from{
    opacity: 0;
}
.v-enter-active{
    transition:opacity .3s ease;
}
.v-enter-to{
    opacity: 1;
}
/*toogle動畫*********************************************/
.cart{
    position: relative;
    z-index: 5;
    & h2{
        font-size: 30px;
        font-weight: bold;
        width: 100%;
        text-align: right;
        margin: 4% 0 0 0;
        padding: 0 7% 0 0;
    }
    width: 80%;
    height: 80%;
    border-radius: 5px;
    padding: 1%;
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & .table{
        overflow-y: scroll;
        width: 90%;
        height: 55vh;
        margin: auto;
        & table{
            width: 100%;
            margin: auto;
        }
        & tr{
            text-align: center;
            font-size: 30px;
            & .tdCan{
                border: 0;
            }
        }
        & td{
            text-align: center;
            font-size: 20px;
            border: 1px solid black;
            & img{
                width: 60px;
                height: 60px;
                object-fit: contain;
                background-color: white;
            }
            & .can{
                background-color: transparent; 
                cursor: pointer;
                width:50%;
                margin: auto;
                color: red;
            }
            & :hover{
                box-shadow: 5px red;
                width:65%;
                transition: .3s;
            }
        }
    }
    & .close{
        cursor: pointer;
        font-size: 25px;
        border-radius: 100%;
        position: absolute;
        right: -1%;
        top: -1%;
        width: 30px;
        height: 30px;
        border: 0;
    }
}
</style>