<script setup>
import { computed, ref, watch } from 'vue';
import { useToogle } from "../composables/toogle";
    const {toogleFunction} = useToogle()
    const newFood = ref('')
    const id = ref(0)
    const list =ref([])
    const toogleValue = ref(false)
    const addFood =()=>{
        if (newFood.value.trim().length > 0) {
            list.value.push({
                id: id.value += 1,
                name:newFood.value
            })
            newFood.value = ('')
            console.log('id',id.value);
        }
    } // 增加食物

    const foodFilter =(item)=>{
        if ( show.value > -1 ) {
            list.value = list.value.filter((li) => li.id !== item.id);
            show.value  = 0;
        } 
    } // 

    const show = ref(0) //控制答案顯示

    const isSetInterval = ref(false) //控制開關停止
     //開關文字

    const start =()=>{
        if (show.value < list.value.length) {
            show.value += 1
        } else {
            show.value = 1
        }
        console.log('show',show.value);
    } //答案值遞增

    const autoToogle =()=>{
        toogleFunction(isSetInterval)
    } //答案開關

    const toogleWord =computed(()=>{
        return isSetInterval.value? 'STOP !!' : 'START ~'
    }) //控制開關文字
    
    const intervalIndex =ref() //接收停止計時器

    const startInterval = () => {
        intervalIndex.value = setInterval(start, 25);
    }; //開始計時
    
    const autoPlay =()=>{
        if (isSetInterval.value) {
            startInterval()
        } else {
            clearInterval(intervalIndex.value)
        }
    } //開始與停止的判斷
    
    const cleanToggle = ()=>{
        list.value =([])
    }

    watch(isSetInterval,autoPlay) //監聽開關停止的值

</script>

<template>
    <div class="food">
        <div class="container">
            <div class="input">
                <input type="text" v-model="newFood" @keydown.enter="addFood">
                <button @click="addFood"  >ADD</button>
            </div>
            <div class="board">
                <ul>
                    <li v-for="item of list" :key="item.id">{{ item.name }}<button @click="foodFilter(item)">x</button></li>
                </ul>
                <p>Results : <span v-for="(item, index) of list" :key="item.id" v-show="index + 1 === show"> {{ item.name }}</span></p>
                <div class="button">
                    <button class="start" @click="autoToogle">{{ toogleWord }}</button>
                    <button @click="cleanToggle">Clean</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .food{
        color: black;
        width: 100%;
        & .container{
            background-color: rgb(176, 160, 160);
            width: 95%;
            height: 65vh;
            padding: 1%;
            border-radius: 10px;
            margin: auto;
        }
        & .input{
            margin: 1.5% 0;
            text-align: center;
            & input{
                width: 90%;
                height: 50px;
                font-size: 30px;
            }
            & button{
                cursor: pointer;
                width: 8%;
                height: 100%;
                padding: 1%;
                font-size: 25px;
                border-radius: 5px;
                /* border: 0; */
                margin-left: 1%;
            }
        }
        & .board{
            font-size: 25px;
            width: 100%;
            height: 80%;
            margin: auto;
            display: flex;
            /* flex-wrap: wrap; */
            flex-direction: column;
            justify-content: space-between;
            & ul{
                height: 75%;
                overflow-y: scroll;
                & li{
                    font-weight: bold;
                }
            }
            & li button{
                cursor: pointer;
                margin: 0 .5%;
            }
            & span{
                margin-bottom: 1%;
            }
            & .start{
                font-size: 25px;
                cursor: pointer;
            }
            & .button{
                display: flex;
                justify-content: space-between;
                align-items: center;
                & :first-child{
                    width: 85%;
                    margin:0 1% 0 0;
                    height: 30px;
                }
                & :last-child{
                    font-size: 25px;
                    width: 15%;
                    height: 30px;
                }
            }
        }
    }

</style>