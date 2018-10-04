import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/app",
      component: () => import("./views/App.vue")
    },
    {
      path: "/push",
      component: () => import("./views/Push.vue")
    },
    {
      path: "/dev",
      component: () => import("./views/Dev.vue")
    },
    {
      path: "/manage",
      component: () => import("./views/Manage.vue")
    },
    {
      path: "/",
      redirect: "/app"
    }
  ]
})
