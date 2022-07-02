<template>
  <div class="card__basics">
    <div class="card__basics-title-container">
      <span class="card__basics-title-number">0{{ index + 1 }}</span>
      <h3 class="card__basics-title">{{ item.title }}</h3>
    </div>
    <p class="card__basics-description">{{ item.description }}</p>
    <span class="card__basics-price">{{ item.price }}</span>
    <router-link
      to="/kontakt"
      type="button"
      class="button"
      id="item.id"
      @click="setChosenProduct(item.id)"
      >Mám zájem</router-link
    >
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "v-product-card-basics-desktop",
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    ...mapMutations({
      setChosenProduct: "setChosenProduct",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/products/products";
@import "~styles/components/button";
</style>
