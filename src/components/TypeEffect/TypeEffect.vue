<template>
  <div class="container wrapper">
    <span class="text typed-text">&nbsp;{{ typeValue }}</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: "v-type-effect",
  created() {
    setTimeout(this.typeText, this.newTextDelay - 400);
  },
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["prodáte.", "zaujmete.", "vyděláte.", "vyniknete."],
      typingSpeed: 100,
      erasingSpeed: 50,
      newTextDelay: 1200,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length) {
          this.typeArrayIndex = 0;
        }
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include flexContainer(row, center, center);
  flex-wrap: wrap;
}
.text {
  font-size: clamp(2.625rem, 5vw, 4rem);
  font-weight: 600;
  letter-spacing: 2px;
}
span.typed-text {
  color: #f2f2f2;
}
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  height: 50px;
  background-color: $text-default-dark;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: $text-default-dark;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
