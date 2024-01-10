<script setup>
import { computed, ref } from "vue";
import {defineAsyncComponent} from 'vue'
import food from "../components/food.vue";
const slideComp = defineAsyncComponent(() => import("slide/slide"));
import { useToogle } from "../composables/toogle";

const {toogleFunction} = useToogle()

const toogleValue = ref(false)

// const toogleChange =()=>{
//   toogleFunction(toogleValue)
// }

const compShow = computed(()=>{
  return toogleValue.value? food : slideComp
})

const nameShow =computed(() =>{
  return toogleValue.value? 'next':'pre'
})

const compNext =()=>{
  toogleValue.value = true
}
const compPre =()=>{
  toogleValue.value = false
}

</script>

<template>
  <div class="components">
    <div class="preBtn">
      <button @click="compPre">&larr;</button>
    </div>
    <div class="compWrap">
      <h1> {{ toogleValue }} This is an components page</h1>
      <transition-group :name="nameShow">
          <div class="a" v-if="toogleValue">
            <keep-alive >
              <food />
            </keep-alive>
        </div>
        <div class="b" v-else>
          <!-- <food style="border: 2px solid blue;"/>  -->
          <slideComp class="set"/>
        </div>
      </transition-group>
      <!-- <component :is="compShow" :key="toogleValue"></component> -->
      <!-- <button @click="toogleChange">ch</button> -->
    </div>
    <div class="nextBtn">
      <button @click="compNext">&rarr;</button>
    </div>
  </div>
</template>

<style scoped>

.next-leave-from {
    left: 0%;
}

.next-leave-active {
    transition: .2s ease;
}

.next-leave-to {
    left: -100%;
}

.next-enter-from {
    left: 100%;
}

.next-enter-active {
    transition: .2s ease;
}

.next-enter-to {
    left: 0%;
}

.pre-leave-from {
    right: 0;
}

.pre-leave-active {
    transition: .2s ease;
}

.pre-leave-to {
    right: -100%;
}

.pre-enter-from {
    right: 100%;
}

.pre-enter-active {
    transition: .2s ease;
}

.pre-enter-to {
  right: 0%;
}


.components{
  width: 100%;
  /* border: 1px solid green; */
  display: flex;
  .preBtn,.nextBtn{
    display: flex;
    align-items: center;
  }
    button{
      font-size: 30px;
      cursor:pointer;
      border-radius: 100%;
      height:100px ;
      width: 100px;
      border: 0;
    }

  .compWrap{
    width: 85%;
    margin: auto;
    height: 80vh;
    /* border: 2px solid red; */
    position: relative;
    overflow: hidden;
    .a,.b{
      position: absolute;
      width: 100%;
      margin: 3% 0 0 0;
    }
  }
  & h1{
    text-align: center;
    padding: 1% 0;
  }
  & .set{
    .control{
      & .center{
        width: 15%;
      }
    }
  }
}
</style>