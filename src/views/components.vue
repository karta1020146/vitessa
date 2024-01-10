<script setup>
import {defineAsyncComponent} from 'vue'
import food from "../components/food.vue";
const slideComp = defineAsyncComponent(() => import("slide/slide"));
import { useToogle } from "../composables/toogle";

const {toogleFunction} = useToogle()

const toogleValue = (true)

const toogleChange =()=>{
  toogleFunction(toogleValue)
}

</script>

<template>
  <div class="components">
    <h1>This is an components page</h1>
      <div class="compWrap">
        <transition-group>
        
        </transition-group>
        <food v-if="toogleValue"/>
        <slideComp v-else class="set"/>
        <button @click="toogleChange">ch</button>
      </div>
  </div>
</template>

<style scoped>
  h1{
    text-align: center;
    padding: 1.5% 0;
  }
  .set{
    .control{
      & .center{
        width: 15%;
      }
    }
  }
</style>
