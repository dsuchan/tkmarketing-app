<template>
  <div class="footer">
    <div class="footer__content container">
      <div class="footer__logo">
        <v-footer-logo />
      </div>
      <div class="footer__cols">
        <v-footer-socials />
        <v-footer-contacts />
      </div>
    </div>
    <div class="footer__author container">
      <v-footer-author />
    </div>
  </div>
</template>

<script>
import FooterLogo from "./FooterLogo.vue";
import FooterSocials from "./FooterSocials.vue";
import FooterContacts from "./FooterContacts.vue";
import FooterAuthor from "./FooterAuthor.vue";
export default {
  name: "v-footer",
  components: {
    "v-footer-logo": FooterLogo,
    "v-footer-socials": FooterSocials,
    "v-footer-contacts": FooterContacts,
    "v-footer-author": FooterAuthor,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/footer/footer";
</style>
