import Vue from 'vue'
import Router from 'vue-router'
import UserData from '@/components/UserData'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AdminData from '@/components/AdminData'
import Add from '@/components/Add'
import ShowData from '@/components/ShowData'
import EditData from '@/components/EditData'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AdminData',
      name: 'AdminData',
      component: AdminData,
      meta: { requiresAuth: true }
    },
    {
      path: '/userData',
      name: 'UserData',
      component: UserData,
      meta: { requiresAuth: true }
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
      meta: { requiresAuth: true }
    },
    {
      path: '/show',
      name: 'ShowData',
      component: ShowData,
      meta: { requiresAuth: true }
    },
    {
      path: '/editData/:id',
      name: 'EditData',
      component: EditData,
      meta: { requiresAuth: true }
    },

  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!localStorage.getItem('jwt')){
      next({
        path: '/login',
        query: { redirect: to.fullPath}
      });
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router