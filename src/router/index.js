import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Contact from "../components/Contact/Contact";
import Gdpr from "../components/Gdpr/Gdpr";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      enterClass:
        "animate__animated animate__fadeInLeft animate__fadeIn animate__faster",
      leaveClass:
        "animate__animated animate__fadeOutRight animate__fadeOut animate__faster",
    },
  },
  {
    path: "/kontakt",
    name: "contact",
    component: Contact,
    meta: {
      enterClass:
        "animate__animated animate__fadeInRight animate__fadeIn animate__faster",
      leaveClass:
        "animate__animated animate__fadeOutLeft animate__fadeOut animate__faster",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Home,
  },
  {
    path: "/gdpr",
    name: "gdpr",
    component: Gdpr,
    meta: {
      enterClass:
        "animate__animated animate__fadeInLeft animate__fadeIn animate__faster",
      leaveClass:
        "animate__animated animate__fadeOutRight animate__fadeOut animate__faster",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
