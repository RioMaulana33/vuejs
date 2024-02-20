<template>
  <div class="">
    <HeadUser/>
  <div style="text-align: center;">
    <div style="background-color: #f8f9fa; color: #212529; padding: 100px 0;">
      <h1 style="font-size: 80px;">Welcome </h1>
      <p style="font-size: 30px;">Anda Login sebagai User.</p>
      <hr style="border-top: 2px solid #212529; width: 50%; margin: 20px auto;">
    </div>
   </div>
  </div>
</template>

<script>
import HeadUser from '@/components/HeadUser.vue'
export default {
  name: 'UserData',
  components: {
    HeadUser
  }
}
</script>
