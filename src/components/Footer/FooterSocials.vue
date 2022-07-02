<template>
  <div class="footer-some">
    <h4 class="footer-some__title">Sociální sítě</h4>
    <ul class="footer-some__list">
      <li class="footer-some__item">
        <a
          href="https://www.instagram.com/terezakocova_marketing/?hl=cs"
          target="_blank"
          class="footer-some__link"
        >
          <v-icon
            class="footer-some__icon"
            name="instagram"
            color="rgba(242, 242, 242, 0.75)"
          />
          Instagram
        </a>
      </li>
      <li class="footer-some__item">
        <a
          href="https://www.linkedin.com/in/terezakocova/"
          target="_blank"
          class="footer-some__link"
        >
          <v-icon
            class="footer-some__icon"
            name="linkedin2"
            color="rgba(242, 242, 242, 0.75)"
          />
          LinkedIn
        </a>
      </li>
      <li class="footer-some__item">
        <a
          href="https://www.facebook.com/tkmarketing.cz"
          target="_blank"
          class="footer-some__link"
        >
          <v-icon
            class="footer-some__icon"
            name="facebook"
            color="rgba(242, 242, 242, 0.75)"
          />
          Facebook
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "../common/Icon.vue";
export default {
  name: "v-footer-socials",
  components: {
    "v-icon": Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/footer/footerSocials";
</style>
