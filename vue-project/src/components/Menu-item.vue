<script setup>
const props = defineProps({
  image : String ,
  description : String ,
  price : Number
})

</script>


<template>

  <div class="container  border rounded mt-5 ">

    <div class="row">

      <div class="col-2">
        <img style="width: 220px;height: 130px" src="https://angel-chef.com/wp-content/uploads/2021/09/5.Double-Beef-Burger-150x150.jpg" alt="">
      </div>

      <div class="col-7 bg-light bg-gradient">
        {{props.description}}
      </div>

      <div class="col-3">

        <div class="d-flex">
          <button class="btn btn-success">اضف للسلة</button>
          <h6 class="px-4"> السعر : {{props.price}}  ريال</h6>
        </div>

      </div>

    </div>

  </div>

</template>



