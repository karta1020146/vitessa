<script setup>
    import {onMounted, ref, watch, computed, inject} from 'vue'
    import { useCartStore } from '../stores/cart.js'
    import { storeToRefs } from 'pinia';
    import {useRoute} from'vue-router' 
    import {RouterLink} from 'vue-router' 
    import axios from 'axios'
    import modal from '../components/modal.vue'
    import { useToogle } from "../composables/toogle";
    
    const {toogleFunction} = useToogle()
    const cartStore = useCartStore()
    const {cartValue} = storeToRefs(cartStore) //data
    const {addCart} = cartStore // function
    const route = useRoute()
    const fetchData =ref() //所有商品資料
    const filterData =ref() //比對後頁面商品資料
    const toogleValue = ref(false)

    const isLoading = ref(true)

    const fetchAxios = async()=>{
        try {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products'); 
            fetchData.value = res.data;
            filterData.value = fetchData.value.filter(v => v.id == route.params.id );
        } catch (error) {
            console.log("error :",error);
        } finally{
            isLoading.value = false
        }
    }
    fetchAxios()

    const counts = ref(0)

    const addCounts = ()=>{
        counts.value += 1
    }
    const reduceCounts = ()=>{
        if (counts.value > 1) {
            counts.value -= 1
        } else {
            counts.value = 0
        }
    }    
    const textBoo = ref(true) //modal 內容判斷

    const addProductToCart = (vueItem) => {
        if(counts.value > 0 ){
            cartStore.addCart({vueItem,counts})
            toogleFunction(toogleValue) //modal畫面開關
            textBoo.value = true
        } else{
            toogleFunction(toogleValue)
            textBoo.value = false
        }
        // console.log('vueItem',vueItem);
        // console.log('counts',counts);
        // console.log('total',total);
    }
    const size = ref(16)

    const addSize = ()=>{
        if (size.value <= 26) {
            size.value += 3
        } 
    }
    const reduceSize = ()=>{
        if (size.value <= 28 && size.value >= 19) {
            size.value -= 3
        } 
    }

    const isDark =inject('isDark')
    const injectValue = computed(()=>{
        return isDark.value ? "linkShopD":"linkShopL"
    }) //深色模式改麵包屑


    const modalText = computed(() =>{
        return textBoo.value? 'Success~': 'No Counts!!!'
    }) //modal 字樣判斷
    const toogleClose =(() =>{
        toogleFunction(toogleValue)
    }) // modal開關切換

</script>

<template>
    <div class="products">
        <transition>
            <modal
            :text="modalText"
            :toogleValue="toogleValue" 
            @toogleClose="toogleClose"/>
        </transition>
        <p>
            <span><RouterLink to="/" :class="injectValue">Shop</RouterLink></span> / 
            <span class="now">Products</span>
        </p>
        <div v-if="isLoading" class="fetchLoad">
            <img src="../assets/loading.svg" alt="">
            <!-- <h2>{{ loadingValue }}</h2> -->
        </div>
        <div class="main" v-else  v-for="item of filterData" :key="item.id">
            <div class="title" >
                <div class="image" >
                    <img :src="item.images[0]" alt="item_image">
                </div>
                <div class="price">
                    <h2>
                        Name : {{ item.title }}
                    </h2>
                    <h2>
                        Price : US$ {{ item.price }}
                    </h2>
                    <div class="count">
                        <h2>
                            Count : 
                        </h2>
                        <div class="container">
                            <div class="number">
                                <button @click="reduceCounts">-</button>
                                <p>{{ counts }}</p>
                                <button @click="addCounts">+</button>
                            </div>
                            <div class="add">
                                <button @click="addProductToCart(item)">
                                    <img src="../assets/addCart.svg" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail">
                <div class="fontSizeControl">
                    <button @click="reduceSize">
                        <img src="../assets/reduce.svg" alt="">
                    </button>
                    <button @click="addSize">
                        <img src="../assets/add.svg" alt="">
                    </button>
                </div>
                <h2 >
                    Description : 
                </h2>
                <br>
                <p :style="'font-size:' + size +'px'">
                    {{ item.description }}
                </p>
                <br>
                <p :style="'font-size:' + size +'px'">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptatum ducimus beatae. Magnam modi saepe adipisci vitae obcaecati suscipit harum nemo doloremque aliquid, minima at aspernatur reprehenderit fugit vero maxime.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptatum ducimus beatae. Magnam modi saepe adipisci vitae obcaecati suscipit harum nemo doloremque aliquid, minima at aspernatur reprehenderit fugit vero maxime.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptatum ducimus beatae. Magnam modi saepe adipisci vitae obcaecati suscipit harum nemo doloremque aliquid, minima at aspernatur reprehenderit fugit vero maxime.
                </p>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .fetchLoad img{
            width: 4%;
            animation:rotate360 .8s linear infinite ;
        }
        
        @keyframes rotate360 {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
    /**初始loading動畫效果*************** */
    .fetchLoad{
        width: 97%;
        height: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .v-enter-from{
        opacity: 0;
    }
    .v-enter-active{
        transition:.2s;
    }
    .v-enter-to{
        opacity: 1;
    }

    .v-leave-from{
        opacity: 1;
    }
    .v-leave-active{
        transition:.2s;
    }
    .v-leave-to{
        opacity: 0;
    }
    /**modal動畫********************/

    .products{
        .linkShopD{
            color: white;
        }
        .linkShopL{
            color: black;
        }
        .now{
            color:hsla(160, 100%, 37%, 1);
            font-weight: bolder;
        }
        width: 100%;
        margin: 1% 0;
        button:hover{
            color: #353535;
            background-color: hsla(160, 100%, 37%, 1);
            transition: .3s;
        }
        .main{
            width: 100%;
            padding: 3%;
            border-radius:8px;
            .title{
                width: 100%;
                display: flex;
                border: 1px solid;
                border-radius:8px;
                .image{
                    width: 25%;
                    border-right: 1px solid;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /* background-color: #fff; */
                    border-top-left-radius:8px;
                    border-bottom-left-radius:8px;
                    img{
                        /* object-fit: cover; */
                        width: 100%;
                        border-top-left-radius:8px;
                        border-bottom-left-radius:8px;
                        vertical-align: bottom;
                    }
                }
                .price{
                    width: 65%;
                    margin: auto 3%;
                    h2{
                        margin: 3% 0;
                    }
                    .count{
                        display: flex;
                        h2{
                            width: 9%;
                            margin: 0 1% 0 0;
                        }
                        .container{
                            width: 91%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                        .number{
                            width: 50%;
                            display: flex;
                            p{
                                width: 7%;
                                text-align: center;
                                margin: 0 3%;
                                font-size: 22px;
                            }
                            button{
                                cursor: pointer;
                                border-radius: 100%;
                                border: 1px solid;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 25px;
                                width: 30px;
                                height: 30px;
                            }
                        }
                        .add{
                            width: 50%;
                            button{
                                cursor: pointer;
                                border: 1px solid;
                                border-radius: 5px; 
                                font-size: 30px;
                                margin-left: 65%  ;
                                width: 100px;
                            }
                        }
                    }
                }
            }
            .detail{
                margin: 2% 0;
                border: 1px solid;
                border-radius:8px;
                padding: 3%;
                height: 400px;
                width: 100%;
                overflow-y: scroll;
                
                .fontSizeControl{
                    display: flex;
                    margin-left: 90%;
                    button{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid;
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius:100% ;
                        margin: 0 10%;
                    }
                }
            }
            .detail::-webkit-scrollbar-thumb {
                    background-color: #3CA877;
            }
            .detail::-webkit-scrollbar {
                width: 8px;
                background-color: black;
            }
        }
    }
</style>