<script setup>
import { ref } from 'vue'
const emit = defineEmits(['darkHandler'])
const props = defineProps(['toggle'])
const darkHandler = () => {
    props.toggle = !props.toggle
}
const roundHandler = () => {
    return  props.toggle ? 'right' : 'left'
}
</script>
<template>
    <div class="all" >
        <div class="darkContainer" @click="$emit('darkHandler')">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="M116 32V16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m80 96a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM44 128a12 12 0 0 0-12-12H16a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12m84 84a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m112-96h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24" />
                </svg></span>
            <span><svg class="moon" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z" />
                </svg></span>
            <div :class="roundHandler()" class="ok">
                <pre></pre>
            </div>
        </div>
    </div>  
</template>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
.all{
    width: 100%;
}
.darkContainer {
    border-radius: 14px;
    border: 1.5px solid;
    width: 5%;
    height: 33px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin:  0 0 0 94%;
    svg {
        width: 92%;
        height: 100%;
    }
    .left {
        width: 33px;
        height: 33px;
        border-radius: 100%;
        background-color: #353535;
        position: absolute;
        margin: 0 0 0 -4%;
        transition: .2s;
        bottom:-4% ;
    }
    .right {
        width: 33px;
        height: 33px;
        border-radius: 100%;
        background-color: #3CA877;
        position: absolute;
        margin: 0 0 0 60%;
        transition: .2s;
        bottom:-4% ;
    }
}
.light {
    color: black;
    background-color: white;
    transition: .3s;
}
.black {
    color: white;
    background-color: #353535;
    transition: .3s;
    p{
    color: #3CA877;
    }
}
</style>