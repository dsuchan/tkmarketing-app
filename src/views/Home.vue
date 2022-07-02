<template>
  <div>
    <particlesJS />
    <v-navigation />
    <v-hero />
    <v-numbers-counter id="numbers" />
    <v-product-card-desktop v-if="desktopWidth" id="sluzby" />
    <v-product-card-mobile v-if="mobileWidth" id="sluzby" />
    <v-partners id="portfolio" />
    <v-call-to-action />
    <v-footer />
    <v-scroll-to-top />
  </div>
</template>

<script>
import ParticlesJS from "../particles/ParticlesJS.vue";
import Navigation from "../components/common/Navigation.vue";
import Hero from "../components/Hero/Hero.vue";
import Numbers from "../components/Numbers/Numbers.vue";
import ProductCardDesktop from "../components/Products/Desktop/ProductCardDesktop.vue";
import ProductCardMobile from "../components/Products/Mobile/ProductCardMobile.vue";
import Partners from "../components/Partners/Partners.vue";
import CallToAction from "../components/CallToAction/CallToAction.vue";
import Footer from "../components/Footer/Footer.vue";
import ScrollToTop from "../components/common/ScrollToTop";
export default {
  name: "v-home",
  components: {
    "v-navigation": Navigation,
    "v-hero": Hero,
    "v-numbers-counter": Numbers,
    "v-product-card-desktop": ProductCardDesktop,
    "v-product-card-mobile": ProductCardMobile,
    "v-partners": Partners,
    "v-call-to-action": CallToAction,
    "v-footer": Footer,
    "v-scroll-to-top": ScrollToTop,
    ParticlesJS,
  },
  computed: {
    mobileWidth() {
      const mobileWidth = 992;
      return mobileWidth >= window.innerWidth;
    },
    desktopWidth() {
      const desktopWidth = 992;
      return desktopWidth < window.innerWidth;
    },
  },
};
</script>
