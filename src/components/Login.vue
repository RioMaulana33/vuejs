<template>
    <div class="row" style="margin-top: 70px;">
        <div class="col-sm-4" style="margin: 0 auto;">
            
            <h2 style="text-align: center; color: #333;">Login</h2>

            <form @submit.prevent="LoginData"
                style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">


                <div class="form-group" style="margin-bottom: 20px;">
                    <label style="font-weight: bold;">Email</label>
                    <input type="email" v-model="student.email" class="form-control"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" placeholder="Email">
                </div>


                <div class="form-group" style="margin-bottom: 20px;">
                    <label style="font-weight: bold;">Password</label>
                    <input type="password" v-model="student.password" class="form-control"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;"
                        placeholder="Password">

                        <p class="pt-3">Belum memiliki Akun? klik
                            <router-link :to="{name: 'Register'}">Register</router-link>
                        </p>


                </div>
                <button type="submit" class="btn btn-primary"
                    style="width: 100%; padding: 10px; border: none; border-radius: 5px; background-color: #007bff; color: #fff; font-weight: bold;">Login</button>
            </form>
        </div>
    </div>
</template>
<style>
    body{
        background-color:  #e0e0e0;
    }
</style>
   
   <script>
       import Vue from 'vue';
       import axios from 'axios';
   
     Vue.use(axios)
     export default {
       name: 'Login',
       data () {
         return {
           result: {},
           student:{
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
              LoginData()
              {
               axios.post("http://127.0.0.1:8000/api/login", this.student)
               .then(response => {
            const data = response.data; // Ambil data dari respons
            // const role = response.data.role_id; // Ambil data dari respons
            // Cek apakah respons memiliki token
            const role = data.role
            console.log("role id=", data.role)
            if (data.token) {
                // Simpan token di localStorage
                localStorage.setItem('jwt', data.token);
                if(role === 1){
                    // Redirect ke halaman HelloWorld setelah login berhasil
                    this.$router.push({ name: 'AdminData' });
                    alert("Login Sukses sebagai Admin");
                }else if(role === 2){
                    // Redirect ke halaman HelloWorld setelah login berhasil
                    this.$router.push({ name: 'UserData' });
                    alert("Login Sukses sebagai User");
                }else{
                    alert('user tidak terdaftar')
                }
            } else {
                // Jika respons tidak memiliki token, tampilkan pesan kesalahan
                alert("Login failed");
            }
        })
        .catch(error => {
            // Tangani kesalahan ketika mengirim permintaan
            console.error('Login Gagal:', error);
            alert('Login Gagal.Mohon Coba Lagi.');
        });
        }
                
        }
        
    }
     </script>