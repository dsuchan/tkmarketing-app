<template>
  <router-link to="/">
    <img src="../../assets/svg/TKmarketing..svg" alt="" class="logo" />
  </router-link>
</template>

<script>
export default {
  name: "v-logo",
};
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
  width: 200px;
  cursor: pointer;
  margin-top: 0.5rem;
  z-index: 999;
}
</style>
