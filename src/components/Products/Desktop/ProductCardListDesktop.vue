<template>
  <div class="card__details">
    <span class="card__details-title">Obsahuje</span>
    <ul class="card__details-list">
      <li
        class="card__details-list--item"
        v-for="item in listItems"
        :key="item.id"
      >
        <img
          v-if="!item.otherServiceIncluded"
          src="../../../assets/svg/checkmark.svg"
          class="card__details-list--item-icon"
          width="25"
        />
        <img
          v-if="item.otherServiceIncluded"
          src="../../../assets/svg/star.svg"
          class="card__details-list--item-icon"
          width="25"
        />
        <p class="card__details-list--item-text">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-product-card-list-desktop",
  props: {
    listItems: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/products/products";
</style>
