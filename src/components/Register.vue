<template>
    <div class="card" align="center" style="max-width: 400px; margin: 0 auto; border-width: 3px; margin-top: 70px;">
      
      <div class="card-header">Register Form</div>
      <div class="card-body">
  
        <form @submit.prevent="saveData" style="text-align: left;">
          <label style="display: block; margin-bottom: 5px;">Name</label>
          <input type="text" v-model="student.name" name="name" id="name" class="form-control"
            style="width: 100%; margin-bottom: 10px; border-width: 2px;">
  
          <label style="display: block; margin-bottom: 5px;">Email</label>
          <input type="email" v-model="student.email" name="email" id="email" class="form-control"
            style="width: 100%; margin-bottom: 10px; border-width: 2px;">
  
          <label style="display: block; margin-bottom: 5px;">Password</label>
          <input type="password" v-model="student.password" name="password" id="password" class="form-control"
            style="width: 100%; margin-bottom: 10px; border-width: 2px; ">
  
          <input type="submit" value="Save" class="btn btn-success" style="width: 100%;">
          <router-link :to="{name: 'Login'}">
             <input type="button" value="Back" class="btn btn-primary" style="width: 100%; margin-top: 10px;">
            </router-link>

        </form>
      </div>
    </div>
  </template>
       
       <script>
           import Vue from 'vue';
           import axios from 'axios';
           Vue.use(axios)

         export default {
           name: 'Register',
           data () {
             return {
               result: {},
               student:{
                          name: '',
                          email: '',
                          password: ''
               }
             }
           },
           created() { 
           },
           mounted() {
                 console.log("mounted() called.......");
             },
           methods: {
                  saveData()
                  {
                   axios.post("http://127.0.0.1:8000/api/register", this.student)
                   .then(
                     ({data})=>{
                      console.log(data);
                       try 
                         {
                            alert("Berhasil Registrasi");
                            this.$router.push({ name: 'Login'})
                            
                          } 
                      catch(err) 
                          {
                            alert("Gagal Registrasi");
                          }    
                     }
                   )
                  }
             }
         }
         </script>
    