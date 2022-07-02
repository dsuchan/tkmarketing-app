<template>
  <div class="footer-contacts">
    <h4 class="footer-contacts__title">Kontakt</h4>
    <ul class="footer-contacts__list">
      <li class="footer-contacts__item">
        <router-link
          to="/kontakt"
          class="footer-contacts__link footer-contacts__link--form"
          >Kontaktní formulář</router-link
        >
      </li>
      <li class="footer-contacts__item">
        <a
          href="mailto:info@tkmarketing.cz"
          class="footer-contacts__link footer-contacts__link--email"
          >info@tkmarketing.cz</a
        >
      </li>
      <li class="footer-contacts__item">IČO: 09778152</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-footer-contacts",
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/footer/footerContacts";
</style>
