<script setup>

import Swal from "sweetalert2";

function showAlert()
{
  Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
  )
}
</script>

<template>
  <button @click="showAlert">Hello world</button>
</template>

