<template>
    <nav class="navbar top-0 start-0 bg-dark fixed-top navbar-shadow"  style="width: 100vw; height: 15vh;">
      <form class="container-fluid d-flex justify-content-between align-items-center">
        <router-link to="/AdminData">
        <button class="btn btn-outline-success me-2 " type="button">Halaman Admin</button>
      </router-link>
        <router-link to="/add">
        <button class="btn btn-sm btn-outline-primary me-2 " type="button" to="/add">Tambah Data</button>
      </router-link>
        <router-link to="/show">
        <button class="btn btn-sm btn-outline-info me-2 pe-3 ps-3 " type="button"  to="/show" >Data User</button>
      </router-link>
        <button class="btn btn-outline-danger ms-auto" type="button" v-on:click="logout" to="/login">Logout</button>
      </form> 
    </nav>
    </template>
    <style>
    .navbar-shadow {
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    </style>
    
    <script>
    
        export default{
            name: 'HeadAdmin',  
            methods:{
            logout(){
                localStorage.removeItem('jwt')
                this.$router.push({name : 'Login'})
                alert('Logout sukses')
                }
            }
        }
    </script>

   