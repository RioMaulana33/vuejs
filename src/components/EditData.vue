<template>
    <div class="card" style="max-width: 400px; margin: 0 auto; border-width: 3px; margin-top: 150px;">
        <HeadAdmin/>
      <div class="card-header fw-bolder">Edit Data</div>
      <div class="card-body" style="width: auto; padding: 1em; ">
        <form @submit.prevent="updateData" class="text-start"> 

          <label class="py-1">Name</label>
          <input type="text" v-model="user.name" name="name" id="name" class="form-control" />
  
          <label class="py-2">Email</label>
          <input type="email" v-model="user.email" name="email" id="email" class="form-control" />
  
          <input type="submit" value="Save" class="btn btn-success position-relative" style="margin-top: 0.6em; width: 100%;" />

          <router-link :to="{name: 'ShowData'}">
          <input type="submit" value="Back" class="btn btn-primary position-relative" style="margin-top: 0.6em; width:100%" />
         </router-link>

        </form>
      </div>
    </div>
  </template>

  <style>
  body {
      background-color: #e0e0e0;
  }
  </style>
  
  <script>
import axios from 'axios';
import HeadAdmin from '@/components/HeadAdmin.vue';

export default {
  name: 'EditData',
  components: {
    HeadAdmin
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        errors: []
      }
    };
  },
  created() {
    this.getDataById();
  },
  methods: {
    async getDataById() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/get/${this.$route.params.id}`);
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async updateData() {
      this.user.errors = [];

      if (!this.user.name.trim()) {
        this.user.errors.push('Name is required');
      }
      if (!this.user.email.trim()) {
        this.user.errors.push('Email is required');
      }

      if (this.user.errors.length === 0) {
        try {
          const formData = new FormData();
          formData.append('name', this.user.name);
          formData.append('email', this.user.email);

          const url = `http://127.0.0.1:8000/api/update/${this.$route.params.id}`;
          const response = await axios.post(url, formData);

          if (response.status === 200) {
            alert(response.data.message);
            this.$router.push({ name: 'ShowData' });
          } else {
            alert('Error updating user');
          }
        } catch (error) {
          console.error('Error updating user:', error);
          alert('Error updating user');
        }
      }
    }
  }
};
</script>
