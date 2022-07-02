<template>
  <div class="accordion__details">
    <ul class="accordion__details-list">
      <li
        class="accordion__details-list--item"
        v-for="item in listItems"
        :key="item.id"
      >
        <img
          v-if="!item.otherServiceIncluded"
          src="../../../assets/svg/checkmark.svg"
          class="accordion__details-list--item-icon"
          width="20"
        />
        <img
          v-if="item.otherServiceIncluded"
          src="../../../assets/svg/star.svg"
          class="accordion__details-list--item-icon"
          width="20"
        />
        <p class="accordion__details-list--item-text">{{ item.text }}</p>
      </li>
    </ul>
    <span class="accordion__details--price">{{ price }}</span>
    <router-link
      to="/kontakt"
      class="accordion__details--button button"
      @click="setChosenProduct(item.id)"
    >
      Mám zájem
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "v-product-card-list-desktop",
  props: {
    listItems: Array,
    price: String,
    item: Object,
  },
  methods: {
    ...mapMutations({
      setChosenProduct: "setChosenProduct",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/products/productsMobile";
@import "~styles/components/button";
</style>
