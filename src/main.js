import { createApp } from "vue";
import "./assets/stylesheets/main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import Home from "./views/Home";
import Navigation from "./components/common/Navigation";
import Hero from "./components/Hero/Hero";
import TypeEffect from "./components/TypeEffect/TypeEffect";
import Numbers from "./components/Numbers/Numbers";
import SectionTitle from "./components/common/SectionTitle";
import SectionSubtitle from "./components/common/SectionSubtitle";
import ProductCardDesktop from "./components/Products/Desktop/ProductCardDesktop";
import ProductCardBasicsDesktop from "./components/Products/Desktop/ProductCardBasicsDesktop";
import ProductCardListDesktop from "./components/Products/Desktop/ProductCardListDesktop";
import ProductCardMobile from "./components/Products/Mobile/ProductCardMobile";
import Partners from "./components/Partners/Partners";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Gdpr from "./components/Gdpr/Gdpr";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueToast);

app.component("v-home", Home);
app.component("v-navigation", Navigation);
app.component("v-hero", Hero);
app.component("v-type-effect", TypeEffect);
app.component("v-numbers", Numbers);
app.component("v-section-title", SectionTitle);
app.component("v-section-subtitle", SectionSubtitle);
app.component("v-product-card-desktop", ProductCardDesktop);
app.component("v-product-card-basics-desktop", ProductCardBasicsDesktop);
app.component("v-product-card-list-desktop", ProductCardListDesktop);
app.component("v-product-card-mobile", ProductCardMobile);
app.component("v-partners", Partners);
app.component("v-call-to-action", CallToAction);
app.component("v-footer", Footer);
app.component("v-contact", Contact);
app.component("v-gdpr", Gdpr);

router.isReady().then(() => {
  app.mount("#app");
});
