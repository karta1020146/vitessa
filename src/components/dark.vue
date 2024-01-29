<script setup>
import { ref } from 'vue'
import { useToogle } from "../composables/toogle";
const {toogleFunction} = useToogle()
const emit = defineEmits(['darkHandler'])
const props = defineProps(['toggle'])

// const darkHandler = () => {
//     toogleFunction(props.toggle)
// }
const roundHandler = () => {
    return  props.toggle ? 'right' : 'left'
}
</script>
<template>
    <div class="all" >
        <div class="darkContainer" @click="$emit('darkHandler')">
            <div class="d_dark">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z" />
                    </svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M116 32V16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m80 96a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM44 128a12 12 0 0 0-12-12H16a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12m84 84a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m112-96h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24" />
                    </svg></span>
            </div>
            <div class="m_dark">
            <span v-if=" props.toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z" />
                </svg>
            </span>
            <span v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="M116 32V16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m80 96a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM44 128a12 12 0 0 0-12-12H16a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12m84 84a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m112-96h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24" />
                </svg>
            </span>
        </div>

            <div :class="roundHandler()" class="ok">
            </div>
        </div>
    </div>  
</template>

<style scoped>
.all{
    width: 100%;
}
.m_dark{
    display: none;
    & svg {
        width: 100%;
        height: 100%;
    }
}
.darkContainer {
    border-radius: 20px;
    /* border: 1px solid; */
    width: 6%;
    height: 40px;
    cursor: pointer;
    display: flex;
    /* justify-content: space-between; */
    position: relative;
    margin:  0 0 0 94%;
    background-color: rgb(154, 154, 154);
    color: black;
    .d_dark{
        display: flex;
        justify-content: space-between;
        & svg {
            width: 55%;
            height: 100%;
            margin: 0 38% 0;
        }
    }
    .left {
        width: 33px;
        height: 33px;
        border-radius: 100%;
        background-color: white;
        position: absolute;
        transition: .3s;
        margin:3% 0 0 3% ;
    }
    .right {
        width: 33px;
        height: 33px;
        border-radius: 100%;
        background-color: white;
        position: absolute;
        margin-top:3% ;
        margin-left:calc(100% - 35px) ;
        transition: .3s;
    }
}
@media screen and (max-width:1024px){
    .d_dark svg,
    .ok{
        display: none;
    }
    .m_dark{
        display: flex;
    }
}

</style>