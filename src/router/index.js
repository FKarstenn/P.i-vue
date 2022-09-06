import Vue from "vue";
import VueRouter from "vue-router";
import HomeAskon from "@/views/HomeView.vue";
import LoginFut from "@/views/LoginFut.vue";
import RegistroFut from "@/views/RegistroFut";
 
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultFut.vue"),
    children: [
      {
        path: "",
        component: HomeAskon,

      },
    ],
  },
  {
      path: "",
      name: "blank",
      component: () => import("@/layouts/Blankfut.vue"),
      children: [
        {
          path: "/login",
          component: LoginFut,
        },
        {
        path: "/registro",
        component: RegistroFut,
        }
        
      ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
