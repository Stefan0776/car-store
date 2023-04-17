<script setup>
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'


 
onBeforeMount(() => async { 
        const masini = ref(await axios.get('http://localhost:3000/products')
    .then(function (response) {
    // handle success
    return response.data;


    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    );
})  
    
 
console.log(masini.value);
</script>

<template>
  <ul>
    <li v-for="masina in masini" >pret: 1000 euro, nume: audi 100</li>
  
  </ul>
</template>