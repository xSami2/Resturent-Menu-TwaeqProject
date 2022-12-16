<script setup>
import {ref} from "vue";

let props = defineProps({
  image : String ,
  description : String,
  price       :Number ,
  CheckSumPrice : Number
});
let Count = ref(0);



</script>


<template>

    <div class="row mt-1">

      <div class="col-2">
        <img style="width: 220px;height: 130px" :src="props.image" alt="">
      </div>

      <div class="col-7 bg-light bg-gradient">
        {{props.description}}
      </div>

      <div class="col-3">

        <div class="d-flex">
          <button
              class="btn btn-success"

          >اضف للسلة</button>
          <h6 class="px-4"> السعر : {{props.price}}  ريال</h6>

        </div>

      </div>

    </div>



</template>



