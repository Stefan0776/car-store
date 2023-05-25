<script setup>
import { ref} from 'vue'
import axios from 'axios'

const hasErrors = ref(false);
const errors = ref([]);
const masini = ref([]);
const pret= ref("");
const numeMasina = ref("");

 function delCar(id) {
  axios.delete('http://localhost:3000/products/'+ id)
  .then(function (response) {
    getCars();
  })
  .catch(function (error) {
    console.log(error);
  });
}

function getCars(){
  axios.get('http://localhost:3000/products').then(response => {
  console.log(response.data);
  masini.value = response.data;
});
}

function validateInput() {
  errors.value = [];
  //check price not empty
  if (pret.value.length === 0) {
    var mesaj = "pretul ar trebui sa fie mai mare ca zero";
    errors.value.push(mesaj);
  } 

  var pr = parseInt(pret.value);

  if ( isNaN(pr) == true){
    var mesaj = "pretul nu este un numar";
    errors.value.push(mesaj);
  }

  if (numeMasina.value.length === 0) {
    var mesaj = "numele masinii trebuie sa fie de cel putin doua caractere";
    errors.value.push(mesaj);
  } 


  if (errors.value.length != 0){
    hasErrors.value = true;
    console.log(errors.value);
    return false;
  }else {
    hasErrors.value = false;
    return true;
  }

}

function addCar() {
  if (validateInput() === true) {
    
        console.log("pret:" + pret.value + " length " + pret.value.length );
      console.log(numeMasina.value);
      axios.post('http://localhost:3000/products',{
        "name":numeMasina.value, 
        "price":pret.value
      }).then(function (response) {
        getCars();
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  
  
  
}




    
getCars();
console.log(masini.value);
</script>

<template>
  <div class="error" v-if="hasErrors">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
      
    </ul>
  </div>

  <form>
    <label for="pret">pret</label>
    <input type="text" v-model="pret">
    <label for="masina">nume masina</label>
    <input type="text" v-model="numeMasina">
    <button @click.prevent="addCar">submit request</button>
  </form>
  <ul>
    <li v-for="masina in masini">pretul masinii este {{ masina.price }} si numele este {{ masina.name }} <button @click="delCar(masina.id)">delete</button></li>
  
  </ul>
</template>