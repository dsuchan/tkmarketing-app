<template>
  <form class="form" @submit.prevent="sendEmail" ref="form">
    <h3 class="form__title">S čím potřebujete pomoct?</h3>
    <section class="radio-buttons">
      <label for="reklamy" class="radio-buttons__item">
        <input
          type="radio"
          name="from_radioInput"
          class="radio-buttons__input"
          id="reklamy"
          value="Reklamy"
          ref="reklamy"
          checked
        />
        <div class="radio-buttons__input--inside"></div>
        Reklamy
      </label>
      <label for="spravaSiti" class="radio-buttons__item">
        <input
          type="radio"
          name="from_radioInput"
          class="radio-buttons__input"
          id="spravaSiti"
          value="Správa sítí"
          ref="spravaSiti"
        />
        <div class="radio-buttons__input--inside"></div>
        Správa sítí
      </label>
      <label for="konzultace" class="radio-buttons__item">
        <input
          type="radio"
          name="from_radioInput"
          class="radio-buttons__input"
          id="konzultace"
          value="Konzultace"
          ref="konzultace"
        />
        <div class="radio-buttons__input--inside"></div>
        Konzultace
      </label>
    </section>
    <section class="input-fields">
      <div class="input-fields__information">
        <h3 class="input-fields__title">Informace o vás</h3>
        <input
          type="text"
          name="from_name"
          class="input-fields__input"
          placeholder="Jméno / Název firmy"
          ref="name"
          v-model="name"
        />
        <p class="input-fields__error-message" v-if="!validName">
          Jméno / Název firmy jsou povinné.
        </p>
        <input
          type="text"
          name="from_email"
          class="input-fields__input"
          placeholder="E-mail"
          ref="email"
          v-model="email"
        />
        <p class="input-fields__error-message" v-if="!validEmail">
          Zadejte platný e-mail.
        </p>
      </div>
      <div class="input-fields__message">
        <h3 class="input-fields__title">Přibližte nám vaši představu</h3>
        <textarea
          name="from_message"
          class="input-fields__input input-fields__input--message"
          rows="10"
          placeholder="Vaše zpráva..."
          v-model="message"
        ></textarea>
      </div>
    </section>
    <section class="gdpr-info">
      <p class="gdpr-info__text">
        Odesláním souhlasíte se
        <router-link to="/gdpr" class="gdpr-info__text--link"
          >zpracováním osobních údajů</router-link
        >
      </p>
    </section>
    <button type="submit" class="form__btn button" :disabled="isDisabled">
      <v-loading-spinner v-if="isLoading" />
      <span v-if="!isLoading">Odeslat</span>
      <span v-if="isLoading">Odesílání</span>
    </button>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";
import { mapGetters } from "vuex";
import LoadingSpinner from "../common/LoadingSpinner";
export default {
  name: "v-contact-form",
  data() {
    return {
      radioVal: "",
      name: "",
      email: "",
      message: "",
      formValid: false,
      isLoading: false,
    };
  },
  components: {
    "v-loading-spinner": LoadingSpinner,
  },
  computed: {
    ...mapGetters(["getChosenProduct"]),
    validName() {
      return this.name ? true : false;
    },
    validEmail() {
      return this.email && this.email.includes("@") ? true : false;
    },
    isDisabled() {
      return this.isLoading ? true : false;
    },
  },
  methods: {
    validateInputs() {
      if (this.validName && this.validEmail) this.formValid = true;
      else this.formValid = false;
    },
    checkedProduct() {
      if (this.getChosenProduct === "reklamy") {
        this.$refs.reklamy.setAttribute("checked", "");
      }
      if (this.getChosenProduct === "spravaSiti") {
        this.$refs.spravaSiti.setAttribute("checked", "");
      }
      if (this.getChosenProduct === "konzultace") {
        this.$refs.konzultace.setAttribute("checked", "");
      } else return;
    },
    sendEmail() {
      this.validateInputs();
      if (this.formValid) {
        this.isLoading = true;
        emailjs
          .sendForm(
            process.env.VUE_APP_SERVICE_ID,
            process.env.VUE_APP_TEMPLATE_ID,
            this.$refs.form,
            process.env.VUE_APP_PUBLIC_KEY
          )
          .then((response) => {
            if (response.status === 200) {
              this.isLoading = false;
              this.$toast.success("E-mail úspěšně odeslán.");
              this.name = "";
              this.email = "";
              this.message = "";
            }
          })
          .catch((error) => {
            this.$toast.error("E-mail se nepodařilo odeslat. Zkuste to znovu.");
            console.error(error);
            this.name = "";
            this.email = "";
            this.message = "";
          });
      }
    },
  },
  mounted() {
    this.checkedProduct();
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/pages/contact/contactForm";
@import "~styles/components/button";
</style>
