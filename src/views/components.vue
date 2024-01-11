<script setup>
  import { computed, ref } from "vue";
  import {defineAsyncComponent} from 'vue'
  import food from "../components/food.vue";
  const slideComp = defineAsyncComponent(() => import("slide/slide"));
  import { useToogle } from "../composables/toogle";

  const {toogleFunction} = useToogle()

  const toogleValue = ref(false)

  const slideData = ref([
      { id: 1, url: '/public/number1.jpg' },
      // { id: 1, url: 'https://picsum.photos/500/500?random=1' },
      { id: 2, url: 'https://picsum.photos/500/500?random=2' },
      { id: 3, url: 'https://picsum.photos/500/500?random=3' },
      { id: 4, url: 'https://picsum.photos/500/500?random=4' },
      { id: 5, url: 'https://picsum.photos/500/500?random=5' },
  ])

  const titleValue =computed(() =>{
    return toogleValue.value? '遠端簡易輪播': '自製美食抽籤'
  })

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
      <h1>{{ titleValue }}</h1>
      <transition-group :name="nameShow">
          <div class="a" v-if="toogleValue">
            <slideComp 
            :data="slideData" 
            style="background-color: #3CA877;"/>
        </div>
        <div class="b" v-else>
          <keep-alive >
              <food />
          </keep-alive>
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
/*****************切換動畫****************** */


.components{
  width: 100%;
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
    position: relative;
    overflow: hidden;
    .a,.b{
      position: absolute;
      width: 100%;
    }
  }
  & h1{
    text-align: center;
    margin: 1.5% 0;
  }
}
</style>