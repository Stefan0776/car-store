<script setup>

  import {ref} from "vue";
  import products from "./components/products.vue";

  const count = ref(0);
  function add(){
    console.log(count.value++)
  }
</script>


<template>
  <h1>WELCOME YOU TOO</h1>

  <button @click="add" >count is: {{ count }}</button>
  <products></products>
</template>
