<template>
  <div class="accordion__basics">
    <div class="accordion__title-container">
      <span class="accordion__basics--title-number">0{{ index + 1 }}</span>
      <h3 class="accordion__basics--title">{{ item.title }}</h3>
    </div>
    <p class="accordion__basics--description">
      {{ item.description }}
    </p>
  </div>
  <button
    type="button"
    class="accordion__button"
    ref="accordionButton"
    @click="showContent"
  >
    Zobrazit detail služby
    <v-icon
      class="accordion__button--arrow"
      name="arrow-down2"
      :size="20"
      color="#DBA514"
    />
  </button>
  <div class="accordion__content" ref="accordionContent">
    <v-product-card-list-mobile
      :listItems="item.listItems"
      :price="item.price"
      :item="item"
    />
  </div>
</template>

<script>
import Icon from "../../common/Icon.vue";
import ProductCardListMobile from "./ProductCardListMobile.vue";
export default {
  name: "v-product-card-basics-desktop",
  components: {
    "v-icon": Icon,
    "v-product-card-list-mobile": ProductCardListMobile,
  },
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    showContent() {
      const accordionButton = this.$refs.accordionButton;
      const accordionContent = this.$refs.accordionContent;

      accordionButton.classList.toggle("accordion__button--active");

      if (accordionButton.classList.contains("accordion__button--active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/products/productsMobile";
@import "~styles/components/button";
</style>
