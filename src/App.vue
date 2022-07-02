<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <transition
        name="router-anim"
        mode="out-in"
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
      >
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import "animate.css";
export default {};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  background-color: $bg-default-dark-2;
  overflow-x: hidden;
}
button {
  border: none;
}
</style>
