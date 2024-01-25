<script setup>
    import { ref,inject, computed } from 'vue';
    import { useToogle } from "../composables/toogle";
    const isDark = inject('isDark')    

    const injectClass = computed(() =>{
        return isDark.value? 'dark':'light'
    })

    const props = defineProps({
        toogleValue:Boolean,
        text:String
    })
    
    const emit =defineEmits(['toogleClose'])

</script>

<template>
    <div class="modal" v-show="toogleValue">
        <div class="text" :class="injectClass">
            <h2>{{ props.text }}</h2>
            <button @click="$emit('toogleClose')">OK!</button>
        </div>

    </div>
</template>

<style scoped>
    .dark{
        color: white;
    }
    .light{
        color:black;
    }
    .modal{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 8;
        & .text{
            width: 28%;
            height: 28%;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #a2a2a2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            
            & h2{
                margin: 5% 0;
            }
            & button{
                font-size: 20px;
                cursor:pointer;
                border-radius: 5px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
                border: 10px;
                padding: 1% 2%;
            }
            & button:hover{
                background-color: hsla(160, 100%, 37%, 1);
                transition: .3s;
            }
        }
    }
</style>