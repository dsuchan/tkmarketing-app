<template>
  <section class="numbers" ref="numbers">
    <div class="numbers-wrapper container">
      <div class="numbers-item">
        <div class="numbers-item__number">
          <span class="numbers-item__number--value" data-target="40">0</span>
          <span class="numbers-item__number--symbol">+</span>
        </div>
        <span class="numbers-item__label">spokojených klientů</span>
      </div>
      <div class="numbers-item">
        <div class="numbers-item__number">
          <span class="numbers-item__number--value" data-target="30">0</span>
          <span class="numbers-item__number--symbol">mil+</span>
        </div>
        <span class="numbers-item__label">vygenerovaných tržeb</span>
      </div>
      <div class="numbers-item">
        <div class="numbers-item__number">
          <span class="numbers-item__number--value" data-target="5">0</span>
          <span class="numbers-item__number--symbol">+</span>
        </div>
        <span class="numbers-item__label">let zkušeností</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "v-numbers-counter",
  mounted() {
    let counters = document.querySelectorAll(".numbers-item__number--value");
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
    this.countNumbers();
  },
  methods: {
    countNumbers() {
      let sectionNumbers = this.$refs.numbers;
      let counters = document.querySelectorAll(".numbers-item__number--value");

      let CounterObserver = new IntersectionObserver(
        (entries, observer) => {
          let [entry] = entries;
          if (!entry.isIntersecting) return;

          let interval = 1500;
          counters.forEach((counter) => {
            function UpdateCounter() {
              const targetNumber = +counter.dataset.target;
              let initialNumber = +counter.innerText;
              const duration = interval / targetNumber;
              let counting = setInterval(() => {
                initialNumber += 1;
                counter.textContent = initialNumber;
                if (initialNumber === targetNumber) {
                  clearInterval(counting);
                }
              }, duration);
            }
            UpdateCounter();
          });
          observer.unobserve(sectionNumbers);
        },
        {
          root: null,
          threshold: window.innerWidth > 768 ? 0.4 : 0.3,
        }
      );

      CounterObserver.observe(sectionNumbers);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/layout/numbers";
</style>
