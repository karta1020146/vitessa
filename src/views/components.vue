<script setup>
import {defineAsyncComponent} from 'vue'
import food from "../components/food.vue";

const slideComp = defineAsyncComponent(() => import("slide/slide"));

</script>

<template>
  <div class="components">
    <h1>This is an components page</h1>
      <food />
      <slideComp />
  </div>
</template>

<style scoped>
  h1{
    text-align: center;
    padding: 1.5% 0;
  }
</style>
