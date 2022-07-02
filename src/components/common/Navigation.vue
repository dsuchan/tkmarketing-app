<template>
  <nav class="nav container">
    <v-logo />
    <ul class="nav__list" id="navList" ref="navList">
      <li class="nav__item">
        <a href="#portfolio" class="nav__link">Portfolio</a>
      </li>
      <li class="nav__item"><a href="#sluzby" class="nav__link">Služby</a></li>
      <li class="nav__item nav__item--contact">
        <router-link to="/kontakt" class="nav__link nav__link--contact">
          Naplánovat konzultaci
        </router-link>
      </li>
    </ul>
    <div class="nav__burger" id="burgerMenu" ref="burgerMenu" @click="showMenu">
      <span class="nav__burger--item line1"></span>
      <span class="nav__burger--item line2"></span>
      <span class="nav__burger--item line3"></span>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  name: "v-navigation",
  components: {
    "v-logo": Logo,
  },
  methods: {
    showMenu() {
      const navList = this.$refs.navList;
      const burger = this.$refs.burgerMenu;

      // Toggle list
      navList.classList.toggle("active");

      // Burger animation
      burger.classList.toggle("toggle");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/navigation";
@import "~styles/components/button";
</style>
