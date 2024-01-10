<script setup>

</script>

<template>
    <div class="notFound">
        <h1>404</h1>
        <h2><router-link to="/">Come Back...</router-link></h2>
    </div>
</template>

<style scoped>
    .notFound{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border: 1px solid;
        position: fixed;
        top: 0;
        left: 0;
        background-color: gray;
    }

</style>