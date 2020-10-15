import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import firebase from 'firebase'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      requiresAuth:true
    }

  },
  {
    path: "/login",
    name: "Login",
    meta:{
      requiresGuest:true
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    meta:{
      requiresGuest:true
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signin.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


//nav guards
router.beforeEach((to,from,next) => {
  // check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // check i not logged in
    if (!firebase.auth().currentUser) {
      next({
        path:'/login',
        query:{
          redirect: to.fullPath
        }
      });
    }else{
      next();
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)){
       // check i not logged in
    if (firebase.auth().currentUser) {
      next({
        path:'/',
        query:{
          redirect: to.fullPath
        }
      });
    }else{
      // proceed to route
      next();
    }
  }else{
    // proceed to route
    next();
  }
});
export default router;
