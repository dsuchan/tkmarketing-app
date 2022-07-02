<template>
  <a href="#" class="to-top" ref="toTop">
    <v-icon name="arrow-up2" :size="25" color="black" />
  </a>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "v-scroll-to-top",
  components: {
    "v-icon": Icon,
  },
  methods: {
    scrollToTop() {
      const toTop = this.$refs.toTop;

      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) toTop.classList.add("active");
        else toTop.classList.remove("active");
      });
    },
  },
  mounted() {
    this.scrollToTop();
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/components/scrollToTop";
</style>
