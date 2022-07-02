<template>
  <div class="footer-author">
    <div class="footer-author__info">
      <span class="footer-author__rights"
        >TKmarketing. | Všechna práva vyhrazena</span
      >
      <router-link to="/gdpr" class="footer-author__gdpr"
        >Ochrana osobních údajů</router-link
      >
    </div>
    <div class="footer-author__author">
      <span
        >Copyright &copy; {{ currentYear }} |
        <a
          href="https://www.linkedin.com/in/david-suchan-375a841a9/"
          target="_blank"
          >David Suchan</a
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer-author",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/footer/footerAuthor";
</style>
