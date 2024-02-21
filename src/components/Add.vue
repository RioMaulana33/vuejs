<template>
  <div class="card" align="center" style="max-width: 400px; margin: 0 auto; border-width: 3px; margin-top: 150px;">
    <HeadAdmin/>
    <div class="card-header">Tambah Data</div>
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
        <router-link :to="{name: 'AdminData'}">
           <input type="button" value="Back" class="btn btn-primary" style="width: 100%; margin-top: 10px;">
          </router-link>

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
         import HeadAdmin from '@/components/HeadAdmin.vue';
         Vue.use(axios)

       export default {
    name: 'Add',
    components: {
    HeadAdmin
    },
    data() {
        return {
            result: {},
            student: {
                name: '',
                email: '',
                password: ''
            }
        };
    },
    created() {
    },
    mounted() {
        console.log("mounted() called.......");
    },
    methods: {
        saveData() {
            axios.post("http://127.0.0.1:8000/api/register", this.student)
                .then(({ data }) => {
                console.log(data);
                try {
                    alert("Berhasil Menambah Data");
                    this.$router.push({ name: 'ShowData' });
                }
                catch (err) {
                    alert("Gagal Tambah Data");
                }
            });
        }
    },
}
       </script>
  