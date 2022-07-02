<template>
  <div class="hero container">
    <div class="hero__content">
      <h1 class="hero__title animate__animated animate__backInUp">
        S naší pomocí <v-type-effect />
      </h1>
      <h3
        class="hero__subtitle animate__animated animate__backInLeft animate__delay-0.75s"
      >
        vaši průvodci online marketingem
      </h3>
    </div>
    <a href="#numbers" class="hero__btn button">Zjistit víc</a>
  </div>
</template>

<script>
import TypeEffect from "../TypeEffect/TypeEffect.vue";
export default {
  name: "v-hero",
  components: {
    "v-type-effect": TypeEffect,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/hero";
@import "~styles/components/button";
</style>
