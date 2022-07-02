<template>
  <div class="products container">
    <v-section-subtitle>Naše specializace</v-section-subtitle>
    <v-section-title>Sociální sítě</v-section-title>
    <div class="products__cards">
      <div class="card container" v-for="(item, index) in items" :key="item.id">
        <v-product-card-basics-desktop :item="item" :index="index" />
        <v-product-card-list-desktop :listItems="item.listItems" />
        <img
          v-if="item.id === 'reklamy'"
          src="../../../assets/svg/Commercial.png"
          alt="ilustrace služby reklama na sociálních sítích"
          class="card__img"
        />
        <img
          v-if="item.id === 'spravaSiti'"
          src="../../../assets/svg/some.png"
          alt="ilustrace služby správa sociálních sítí"
          class="card__img"
        />
        <img
          v-if="item.id === 'konzultace'"
          src="../../../assets/svg/Consulting.png"
          alt="ilustrace služby konzultace"
          class="card__img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../../common/SectionTitle.vue";
import SectionSubtitle from "../../common/SectionSubtitle.vue";
import ProductCardBasicsDesktop from "./ProductCardBasicsDesktop.vue";
import ProductCardListDesktop from "./ProductCardListDesktop.vue";
import { mapGetters } from "vuex";
export default {
  name: "v-product-card-desktop",
  components: {
    "v-section-title": SectionTitle,
    "v-section-subtitle": SectionSubtitle,
    "v-product-card-basics-desktop": ProductCardBasicsDesktop,
    "v-product-card-list-desktop": ProductCardListDesktop,
  },
  computed: {
    ...mapGetters({
      items: "getItems",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/products/products";
@import "~styles/components/button";
</style>
