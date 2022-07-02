<template>
  <div class="accordion container">
    <div class="accordion-heading container">
      <v-section-subtitle>Naše specializace</v-section-subtitle>
      <v-section-title>Sociální sítě</v-section-title>
    </div>
    <div class="accordion__cards">
      <div
        class="accordion__card container"
        v-for="(item, index) in items"
        :key="item.id"
      >
        <v-product-card-basics-mobile :item="item" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../../common/SectionTitle.vue";
import SectionSubtitle from "../../common/SectionSubtitle.vue";
import ProductCardBasicsMobile from "./ProductCardBasicsMobile.vue";
import { mapGetters } from "vuex";
export default {
  name: "v-product-card-mobile",
  components: {
    "v-section-title": SectionTitle,
    "v-section-subtitle": SectionSubtitle,
    "v-product-card-basics-mobile": ProductCardBasicsMobile,
  },
  computed: {
    ...mapGetters({
      items: "getItems",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/products/productsMobile";
</style>
