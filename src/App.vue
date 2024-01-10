<script setup>
import {ref,defineAsyncComponent} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import cart from './components/cart.vue'
import dark from './components/dark.vue'
import { useCartStore } from "./stores/cart";
const slideComp = defineAsyncComponent(() => import("remoteSlide/slideComp"));

const cartStore =useCartStore()

const isDark = ref(false)

const darkHandler = () => {
  isDark.value = !isDark.value
  localStorage.setItem('dark', JSON.stringify(isDark.value))
} // 資料存入localStorage，並轉字串

const dkdHandler = () => {
  return isDark.value ? 'black' : 'light'
}

const toogleValue = ref(false)

const toogleClose=()=>{
  toogleValue.value = !toogleValue.value
}

const localValue = localStorage.getItem('dark') //取用localStorage資料

if(localValue){
  isDark.value = JSON.parse(localValue)
} //如果取用localStorage就轉回布林值

/*明暗模式**************************************/

</script>

<template >
  <div class="container" :class="dkdHandler()">
    <div class="cartBtnContainer">
      <cart
      :class="dkdHandler()"
      :isClose="toogleValue" 
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
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <div class="wrapper">
        <!-- <HelloWorld msg="測試" /> -->
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

.container{
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

/* header {
  line-height: 1.5;
  background-color: #fff;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
} */

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
    & .center{
      & span{
        background-color: #fff;
      }
    }
  }

}

</style>
