<script setup>
import {ref} from "vue";

let props = defineProps({
  image : String ,
  name: String,
  price       :Number ,
  CountDishes : Number,
  NumberOfOrder : Number,
  Menu : Object
});
let Count = ref(0);



</script>


<template>

    <div class="row mt-1 text-center">

      <div class="col-1">
      <p>{{ NumberOfOrder}}</p>
      </div>

      <div class="col-3">
        <img style="width: 220px;height: 130px" :src="props.image" alt="">
      </div>

      <div class="col-2">
        {{props.name}}

      </div>

      <div class="col-2">
        {{props.price}}
      </div>


      <div class="col-2">
        <button class="btn btn-success">اضف للسلة</button>
      </div>

      <div class="col-2">

        {{props.CountDishes}}

      </div>

    </div>

</template>



