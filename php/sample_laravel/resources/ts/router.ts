import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home/index.vue";
import Login from "./pages/auth/login.vue";
import Todo from "./pages/todo/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/todo",
      component: Todo,
    },
  ],
});
