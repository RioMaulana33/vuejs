<template>
    <div class="">
    <HeadAdmin/>
    <div style="text-align: center; padding-top: 20vh;">
      <div style="background-color: #f8f9fa; color: #212529; padding: 100px 0;">
        <h1 style="font-size: 80px;">Welcome </h1>
        <p class="text" style="font-size: 30px;">Anda Login sebagai Admin.</p>
        <hr style="border-top: 2px solid #212529; width: 50%; margin: 20px auto;">
      </div>
     </div>
    </div>
  </template>
  <style>
  @keyframes hrAnimation {
    from {
      width: 0;
    }
    to {
      width: 50%;
    }
  }

  hr {
    border: none;
    border-top: 2px solid #212529;
    width: 0;
    margin : 20px auto;
    animation: hrAnimation 1s forwards;
  }

</style>




  <script>
  import HeadAdmin from '@/components/HeadAdmin.vue';
  export default {
    name: 'AdminData',
    components: {
    HeadAdmin
},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
  