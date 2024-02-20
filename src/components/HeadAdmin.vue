<template>
    <nav class="navbar top-0 start-0 bg-dark fixed top"  style="width: 100vw; height: 15vh;">
      <form class="container-fluid justify-content-start">
        <router-link to="/AdminData">
        <button class="btn btn-outline-success me-2 " type="button">Halaman Admin</button>
      </router-link>
        <router-link to="/add">
        <button class="btn btn-sm btn-outline-primary me-2" type="button" v-on:click="Add" to="/Add">Tambah Data</button>
      </router-link>
        <button class="btn btn-outline-danger " type="button" v-on:click="logout" to="/login">Logout</button>
      </form> 
    </nav>
    </template>
    
    <script>
    
        export default{
            name: 'HeadAdmin',  
            methods:{
            logout(){
                localStorage.removeItem('jwt')
                this.$router.push({name : 'Login'})
                alert('log out sukses')
                }
            }
        }
    </script>

   