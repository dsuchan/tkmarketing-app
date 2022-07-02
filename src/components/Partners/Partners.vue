<template>
  <div class="partners">
    <v-section-subtitle>Spokojení klienti</v-section-subtitle>
    <div class="partners__grid container">
      <img
        class="partners__item"
        src="../../assets/logos/henrys_logo.svg"
        width="100"
      />
      <img
        class="partners__item"
        src="../../assets/logos/slavia_logo.svg"
        width="100"
      />
      <img
        class="partners__item"
        src="../../assets/logos/music-city_logo.svg"
        width="100"
      />
      <img
        class="partners__item"
        src="../../assets/logos/soundeus_logo.svg"
        width="100"
      />
      <img
        class="partners__item"
        src="../../assets/logos/vsem_logo.svg"
        width="100"
      />
      <img
        class="partners__item"
        src="../../assets/logos/visixa_logo.svg"
        width="100"
      />
    </div>
  </div>
</template>

<script>
import SectionSubtitle from "../common/SectionSubtitle.vue";
export default {
  name: "v-partners",
  components: {
    "v-section-subtitle": SectionSubtitle,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/partners";
</style>
