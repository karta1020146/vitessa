<script setup>
  import {ref,defineAsyncComponent,provide, onMounted,watch} from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import cart from './components/cart.vue'
  import dark from './components/dark.vue'
  import { useCartStore } from "./stores/cart";
  import { useToogle } from "./composables/toogle";
const {toogleFunction} =useToogle() // 開關

const cartStore =useCartStore() //購物車store

const isDark = ref(false)

provide('isDark',isDark)

const darkHandler = () => {
  toogleFunction(isDark)
  localStorage.setItem('dark', JSON.stringify(isDark.value))
} // 資料存入localStorage，並轉字串

const dkdHandler = () => {
  return isDark.value ? 'black' : 'light'
}

const isToogle = ref(false)

const toogleClose=()=>{
  toogleFunction(isToogle)
}

const localValue = localStorage.getItem('dark') //取用localStorage資料

if(localValue){
  isDark.value = JSON.parse(localValue)
} //如果取用localStorage就轉回布林值

/*明暗模式**************************************/
  const marginValue = ref(220)
  const loadValue = ref(0)
  const loadClose = ref(true)
  const intervalId = ref() //停止interval需要的ID值
  const loadAdd=()=>{
    if (loadValue.value >= 0 && loadValue.value < 100) {
      loadValue.value += 1
      marginValue.value -= 1.95
    }
    // console.log(loadValue.value);
  }

  const autoLoad=()=>{
    intervalId.value =  setInterval(loadAdd, 30);
  }
  onMounted(()=>{
    autoLoad()
  })
  
  watch(loadValue,()=>{
    if (loadValue.value == 100) {
      clearInterval(intervalId.value)
      loadClose.value = false
    } 
  })

</script>

<template >
  <div class="container" :class="dkdHandler()">
    <transition>
      <div class="loading" v-show="loadClose">
        <div class="box">
          <em>
            <h1>{{ loadValue }}%</h1>
          </em>
          <div class="water" 
            :style="'margin-top:'+ marginValue + '%;'">
          </div>
        </div>
      </div>
    </transition>

    <div class="cartBtnContainer">
      <cart
      :class="dkdHandler()"
      :isClose="isToogle" 
      @toogleClose="toogleClose"
      />
      <button class="cartButton" @click="toogleClose">
          <img src="./assets/cart.svg" alt="">
          <button class="cartLength">
            {{ cartStore.cartValue.length }}
          </button >
      </button>
    </div>
  <dark 
  :toggle="isDark"
  @darkHandler="darkHandler"
  />
    <header>
      <HelloWorld msg="商城(API) + 組件">
        <template #title>
          本次練習是用 Vite + Pinia
        </template>
      </HelloWorld>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <div class="wrapper">
        <nav>
          <RouterLink  to="/">Shop</RouterLink>
          <RouterLink  to="/components">Components</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>

@keyframes rotate {
  from{
    rotate:0deg;
  }
  to{
    rotate:360deg;
  }
  
}

.container{
  .v-leave-active{
    transition: .4s;
  }
  .v-leave-to{
    opacity: 0;
  }
  .loading{
    width: 100%;
    height: 100%;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(198, 198, 198);
    .box{
      width: 175px;
      height: 175px;
      border-radius: 50%;
      border:5px dotted gray;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      .water{
        width: 200px;
        height: 200px;
        border-radius: 45%;
        background-color: #0969da;
        position: absolute;
        z-index:-1 ;
        animation: rotate 3s linear infinite;
      }
    }

  }
  min-height: 100vh;
  display: block;
  justify-content: center;
  margin: auto;
  width: 100%;
  padding:2% 10% ;

  & .cartBtnContainer{
    & .cartButton{
      width: 60px;
      height: 60px;
      border-radius: 100%;
      border: 1px solid;
      position: fixed;
      right: 2%;
      bottom: 5%;
      cursor: pointer;
      & img{
        width: 60%;
        margin: auto;
        display: flex;
        align-items: center;
      }
    }
    & .cartLength{
      border: 0;
      font-size: 16px;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background-color: red;
      color: white;
      position: absolute;
      top: -15%;
      right: -15%;
      z-index: 2;
    }
  }

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a {
  display: inline-block;
  font-size: 24px;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: black;
}

.light {
  color: black;
  background-color: rgb(198, 198, 198);
  transition: .3s;
  nav {
    background-color: rgb(198, 198, 198);
    transition: .3s;
  }
  nav a:hover{
    color: hsla(160, 100%, 37%, 1);
    transition: 0.3s;
  }
  :deep(.detail p){
    color:black;
    transition: .3s;
  }
  .cart{
    background-color: rgb(225, 212, 194);
    .table {
      border:1px solid red;
    }
  }
}

.black {
  .loading{
    background-color: #353535;
  }
  color: white;
  background-color: #353535;
  transition: .3s;
  & nav {
    background-color: #353535;
    transition: .3s;
    & a{
      color: white;
      transition: .3s;
    }
  }
  nav a:hover{
    color: hsla(160, 100%, 37%, 1);
    transition: 0.3s;
  }
  nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  transition: .3s;
  }
  
  :deep(.detail p){
    color: white;
    transition: .3s;
  }
  :deep(.data a:hover){
    background-color:hsla(160, 100%, 37%, 1);
  }
  .cart{
    background-color: gray;
    ::deep(.table table td){
      border: 1px solid red;
    }
  }
  .components{
    & .control{
      & .aaa{
        & span{
          background-color: #fff;
        }
      }
    }
    .food .container{
      background-color: red;
    }
  }

}

</style>
