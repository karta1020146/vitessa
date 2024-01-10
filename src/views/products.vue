<script setup>
    import { useCartStore } from '../stores/cart.js'
    import { storeToRefs } from 'pinia';
    import {useRoute} from'vue-router' 
    import {onMounted, ref, watch,computed} from 'vue'
    import {RouterLink} from 'vue-router' 
    import axios from 'axios'
    const cartStore = useCartStore()
    const {cartValue} = storeToRefs(cartStore) //data
    const {addCart} = cartStore // function
    const route = useRoute()
    const fetchData =ref() //所有商品資料
    const filterData =ref() //比對後頁面商品資料

    const fetchAxios = async()=>{
        try {
            const res = await axios.get('https://fakestoreapi.com/products'); 
            fetchData.value = res.data;
            filterData.value = fetchData.value.filter(v => v.id == route.params.id )
        } catch (error) {
            console.log("error :",error);
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
    const addProductToCart = (vueItem) => {
        if(counts.value > 0 ){
            cartStore.addCart({vueItem,counts})
            alert('ok')
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
</script>

<template>
    <div class="products">
        <p>
            <span><RouterLink to="/" class="linkShop">Shop</RouterLink></span> / 
            <span class="now">Products</span>
        </p>
        <div class="main" v-for="item of filterData" :key="item.id">
            <div class="title">
                <div class="image" >
                    <img :src="item.image" alt="item_image">
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

.products{
    .linkShop{
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
            height: 280px;
            display: flex;
            border: 1px solid;
            border-radius:8px;
            .image{
                width: 30%;
                border-right: 1px solid;
                padding: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fff;
                border-top-left-radius:8px;
                border-bottom-left-radius:8px;
                img{
                    width: 50%;
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