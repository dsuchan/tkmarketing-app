<template>
  <div class="page">
    <div class="contact__header container">
      <v-logo />
    </div>
    <div class="contact">
      <particlesJS3 />
      <div class="contact__content-wrapper container">
        <div class="contact__heading">
          <h1 class="contact__heading--title">
            Máte projekt<span class="contact__heading--end">?</span>
          </h1>
          <h2 class="contact__heading--subtitle">
            Rádi pomůžeme<span class="contact__heading--end">.</span>
          </h2>
        </div>
        <v-contact-form />
      </div>
    </div>
  </div>
</template>

<script>
import ParticlesJS3 from "../../particles/ParticlesJS3.vue";
import Logo from "../common/Logo.vue";
import ContactForm from "./ContactForm.vue";
export default {
  name: "v-contact",
  components: {
    ParticlesJS3,
    "v-logo": Logo,
    "v-contact-form": ContactForm,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/pages/contact/contact";
</style>
