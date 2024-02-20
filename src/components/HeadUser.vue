<template>
<nav class="navbar top-0 start-0 bg-dark"  style="width: 100vw; height: 15vh;">
  <form class="container-fluid d-flex justify-content-between align-items-center">
    <button class="btn btn-outline-success me-5 " type="button">Halaman User</button>
    <button class="btn btn-outline-danger end-0 " type="button" v-on:click="logout" to="/login">Logout</button>
  </form>
</nav>
</template>

<script>

    export default{
        name: 'HeadUser',
        methods:{
        logout(){
            localStorage.removeItem('jwt')
            this.$router.push({name : 'Login'})
            alert('log out sukses')
            }
        }
    }
</script>