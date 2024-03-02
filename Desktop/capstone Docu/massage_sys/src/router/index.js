import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dashHome from '../views/Admin/Dashboard_pages.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AdminSignUp',
      name: ' AdminSignUp',
        component: () => import('../views/Admin/AdminSignUp.vue'),
       meta:{
        hideNavbar:true,
      }
    },
    {
      path: '/Admin_log',
      name: 'Admin_log',
        component: () => import('../views/Admin/Admin_log.vue'),
       meta:{
        hideNavbar:true,
      }
    },
    {
      path: '/Dashboard_Pages',
      name: 'Dashboard_Pages',
      component: dashHome,
       meta:{
        hideNavbar:true,
      }
    },

{
      path: '/Booking_request',
      name: 'Booking_request',
      component: () => import('../views/Admin/Booking_request.vue'),
       meta:{
        hideNavbar:true,
      }
    },

{
      path: '/Transaction_record',
      name: 'Transaction_record',
      component: () => import('../views/Admin/Transaction_record.vue'),
       meta:{
        hideNavbar:true,
      }
    },


{
      path: '/Upload_Serv',
      name: 'Upload_Serv',
      component: () => import('../views/Admin/Upload_Serv.vue'),
       meta:{
        hideNavbar:true,
      }
    },
    
{
      path: '/Message',
      name: 'Message',
      component: () => import('../views/Admin/Message.vue'),
       meta:{
        hideNavbar:true,
      }
    },
{
      path: '/Therapist_reg',
      name: 'Therapist_reg',
      component: () => import('../views/Admin/Therapist_reg.vue'),
       meta:{
        hideNavbar:true,
      }
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    
{
      path: '/services',
      name: 'Services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/Register',
      name: 'register',
      component: () => import('../views/register.vue')
    },

{
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../views/Services.vue')
    },

    {
      path: '/Dashboard_Cust',
      name: 'Dashboard_Cust',
      component: () => import('../views/Dashboard_Cust.vue'),
      meta:{
        hideNavbar:true,
      }
    },
,
    {
      path: '/Dash_Home',
      name: 'Dash_Home',
      component: () => import('../views/Dash_Home.vue'),
      meta:{
        hideNavbar:true,
      }
    },
     {
      path: '/booking_reserve',
      name: 'booking_reserve',
      component: () => import('../views/booking_reserve.vue'),
      meta:{
        hideNavbar:true,
      }
    },
{
      path: '/transact_record',
      name: 'transact_record',
      component: () => import('../views/Transact_Record.vue'),
      meta:{
        hideNavbar:true,
      }
    },
{
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/calendar.vue'),
       meta:{
        hideNavbar:true,
      }
    },

     {
      path: '/chat_view',
      name: 'chat_view',
      component: () => import('../views/chatbox.vue'),
      meta:{
        hideNavbar:true,
      }
    },
  ]
})

export default router
