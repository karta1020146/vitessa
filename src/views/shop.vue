<script setup>
    import{ref,computed} from'vue'
    import{ useShopStore } from '../stores/shop.js'
    import {storeToRefs } from 'pinia'
    import {RouterLink} from 'vue-router' 
    const store =useShopStore()
    const {data} =storeToRefs(store)
    const category= ref([
        {id:1,name:"men's clothing"},
        {id:2,name:"jewelery"},
        {id:3,name:"electronics"},
        {id:4,name:"women's clothing"},
    ])
    const toogleFilter =ref(false)
    const filterData =ref()
    const showFilter = (cat)=>{
        filterData.value = data.value.filter((item) => item.category === cat)
        toogleFilter.value = true;
    }
    const showAll = ()=>{
        toogleFilter.value = false
    }
    const ddd =computed(()=>{
        return toogleFilter.value?
        filterData.value 
        : 
        data.value
    })
</script>

<template>
    <div class="shop">
        <div class="tag">
            Category :
            <button @click="showAll">
                All
            </button>
            <button v-for="item of category" :key="item.id" 
                @click="showFilter(item.name)">
                {{ item.name }}
            </button>
        </div>
        <div class="container">
            <div class="data" v-for="item of ddd" :key="item.id">
                <RouterLink :to="`/products/${item.id}`">
                    <div class="blur">
                        <h2>View Details</h2>
                    </div>
                    <div class="image">
                        <img :src="item.image" alt="product_image">
                    </div>
                    <div class="detail">
                        <p><span class="title">Name : </span>{{ item.title }}</p>
                        <p><span class="title">Price : </span>US$ {{ item.price }}</p>
                        <p><span class="title">Category : </span>{{ item.category }}</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* *{
    --marginRL:1%;
    --items:5;
    font-size: 16px;
} */
.blur{
    background-color: black;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    & h2{
        font-size: 2rem;
    }
}
    .shop{
        font-size: 16px;    
        margin: 1% 0;
        & .tag{
            & button{
                font-size: 1rem;
                margin: 1% .5%;
                cursor: pointer;
            }
        }
        & .container{
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap:wrap ;
            & a{
                text-decoration: none;
            }
            & .data:hover .blur{
                opacity:60%;
                transition:.4s;
            }
            & .data{
                width: calc( 
                    (100% - var(--items) * var(--marginRL) * 2) / var(--items) 
                );
                margin: var(--marginRL) ;
                border: 2px solid black;
                border-radius: 3px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                text-align: left;
                position: relative;
                transition: .3s;
                & .detail{
                    text-decoration: none;
                    color: black;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;

                    & p{
                        border-bottom: 1px solid;
                        overflow:hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-weight: bold;
                        .title{
                            font-size: 1.1rem;
                        }
                    }
                }
                & .image{
                    width: 100%;
                    height:350px;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #fff;
                    /* overflow: hidden; */
                    /* object-fit: contain; */

                    & img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        padding: 2%;
                        vertical-align: bottom;
                    }
                }
            }
        }
    }

    /* @media screen and (max-width: 1024px){
        .shop{
            font-size: 20px;
        }
        & .data{
            --marginRL:2%;
            --items:4;
        }
    }
    @media screen and (max-width: 768px){
        & .data{
            --items:2;
        }
    } */

</style>