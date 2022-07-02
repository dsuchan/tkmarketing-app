<template>
  <v-section-subtitle>Rovnou k věci</v-section-subtitle>
  <div class="cta">
    <particlesJS2 />
    <div class="cta__wrapper container">
      <h2 class="cta__heading">Potřebujete pomoct? Ozvěte se!</h2>
      <router-link to="/kontakt" class="cta__btn button" type="button"
        >Kontaktní formulář</router-link
      >
    </div>
  </div>
</template>

<script>
import ParticlesJS2 from "../../particles/ParticlesJS2.vue";
import SectionSubtitle from "../common/SectionSubtitle.vue";
export default {
  name: "v-call-to-action",
  components: {
    ParticlesJS2,
    "v-section-subtitle": SectionSubtitle,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/callToAction";
@import "~styles/components/button";
</style>
