<script setup>
import NavbarWebsite from "@/components/NavBar-website.vue"
import NavbarMenu    from "@/components/NavBar-Menu.vue"
import  MenuItem from "@/components/Menu-item.vue"
import {ref} from "vue";

let CheckSumPrice = ref(0);
let Count = ref(0);

let MenuPrice = {
  HamburgerMeat : 30 ,
  HamburgerChinkn : 40 ,
  HamburgerVegtible : 50
}

function CheckSum(Price){
  CheckSumPrice.value +=Price ;
}

</script>


<template>

  <NavbarWebsite/>


<div class="container  border rounded mt-5 ">


 <MenuItem
  image="https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg"
  description="افضل برجر دجاج مع صوصات وعسل"
  :price="MenuPrice.HamburgerMeat"
  :CheckSumPrice="CheckSumPrice"
  @click="CheckSum(MenuPrice.HamburgerMeat)"

 />
  <MenuItem
      image="https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1-500x500.jpg"
      description="افضل برجر لحم مع صوصات وعسل"
      :price="MenuPrice.HamburgerMeat"
      :CheckSumPrice="CheckSumPrice"
      @click="CheckSum(MenuPrice.HamburgerMeat)"

  />





</div>
   <div class="d-flex justify-content-center mt-3">
  <h4 class="">  السعر الكلي : {{CheckSumPrice }} </h4>
   </div>
  <div class="d-flex justify-content-center mt-3">

    <button class="btn btn-success mx-4" @click="CheckSumPrice = 0">  احذف الطلبات </button>
  </div>
</template>

