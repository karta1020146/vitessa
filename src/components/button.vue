<script setup>
    import { inject,computed } from 'vue'

    const emit = defineEmits(['addClick'])

    const isDark =inject('isDark')
    const injectValue = computed(()=>{
            return isDark.value ? "#353535":"rgb(198, 198, 198)"
    }) //深色模式改背景顏色
</script>

<template>
    <div class="bt">
        <span class="board"></span>
        <span class="blur1" :style="'background-color:' + injectValue " ></span>
        <!-- <span class="blur2" :style="'background-color:' + injectValue " ></span> -->
        <button class="button" @click="$emit('addClick')" >
            <slot></slot>
        </button>
    </div>
</template>
<style scoped>
    .bt {
        width: 150px;
        height: 50px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button {
        z-index: 3;
        background-color: #ebebeb;
        width: 100px;
        height: 35px;
        border-radius: 5px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
    }

    .blur1 {
        display: block;
        z-index: 2;
        width: 105px;
        height: 30px;
        position: absolute;
        transition: .3s;
    }
    .blur2 {
        display: block;
        z-index: 2;
        width: 105px;
        height: 30px;
        position: absolute;
        transition: .3s;
    }

    .bt:hover .board {
        display: block;
    }

    .bt:hover .blur1 {
        animation: shiny .5s linear infinite;
        /* top: -10px;
        left: -75px; */
    }
    /* .bt:hover .blur2 {
        animation: shinys .5s linear infinite;
        top: 25px;
        left: 75px;
    } */

    /* @keyframes shinys {
        0% {
            top: 25px;
            left: 75px;
        }

        25% {
            top: 25px;
            left: -50px;
        }

        50% {
            top: -10px;
            left: -50px;
        }

        75% {
            top: -10px;
            left: 75px;
        }

        100% {
            top: 25px;
            left: 75px;
        }
    } */
    @keyframes shiny {
        0% {
            top: -10px;
            left: -75px;
        }

        25% {
            top: -10px;
            left: 75px;
        }

        50% {
            top: 25px;
            left: 75px;
        }

        75% {
            top: 25px;
            left: -50px;
        }

        100% {
            top: -10px;
            left: -50px;
        }
    }

    .board {
        position: absolute;
        z-index: 1;
        display: none;
        width: 106px;
        height: 42px;
        background-color: hsla(160, 100%, 37%, 1);
        border-radius: 5px;
    }
</style>
