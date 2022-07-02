import { createStore } from "vuex";

export default createStore({
  state: {
    items: [
      {
        id: "reklamy",
        title: "Reklamy na sociálních sítích",
        description:
          "Maximálně rozšiřte svůj dosah na sociálních sítích a zvyšte tak pravděpodobnost prodeje svých produktů a služeb.",
        listItems: [
          {
            id: "rItem1",
            text: "kompletní správu reklam na Facebooku a Instragamu",
          },
          { id: "rItem2", text: "vytvoření  všech druhů kampaní" },
          { id: "rItem3", text: "oslovení relevantních zákazníků" },
          { id: "rItem4", text: "optimalizace kampaní" },
          { id: "rItem5", text: "pravidelný reporting výsledků" },
          { id: "rItem6", text: "připojení analytických nástrojů" },
          { id: "rItem7", text: "připojení a správa katalogu" },
        ],
        price: "Od 8 000 Kč",
        addition: "",
      },
      {
        id: "spravaSiti",
        title: "Správa sociálních sítí",
        description:
          "Chcete mít svou službu/produkt na sociálních sítích, ale nemáte na to čas, vědomosti nebo se vám prostě jen nechce? Rádi vám s tím pomůžeme.",
        listItems: [
          {
            id: "sItem1",
            text: "kompletní správu sociálních sítí a reklam na Facebooku a Instagramu",
          },
          {
            id: "sItem2",
            text: "nastavení profilu, přidání informací o firmě, bio apod.",
          },
          { id: "sItem3", text: "pravidelné postování příspěvků a stories" },
          { id: "sItem5", text: "vytvoření grafických podkladů" },
          {
            id: "sItem8",
            text: "vytvoření kampaní – konverzní, remarketing, traffic, povědomí/dosah, podpora příspěvků",
          },
          {
            id: "sItem9",
            text: "služba Reklama na sociálních sítích je automaticky zahrnuta v ceně",
            otherServiceIncluded: true,
          },
        ],
        price: "Od 15 000 Kč",
        addition: "",
      },
      {
        id: "konzultace",
        title: "Konzultace",
        description:
          "Plnit své obchodní cíle pomocí sociálních sítí je možné a mnohdy velmi efektivní, pokud ovšem tušíte, jak na to. Proto vám v rámci konzultace pomůžeme.",
        listItems: [
          {
            id: "kItem1",
            text: "komplexní audit vašich účtů",
          },
          {
            id: "kItem2",
            text: "identifikaci chyb a příležitostí pro zlepšení",
          },
          {
            id: "kItem3",
            text: "konzultaci v reálném čase na reálných ukázkách",
          },
          {
            id: "kItem4",
            text: "seznam přesně definovaných kroků pro vyřešení nalezených nedostatků",
          },
        ],
        price: "1 200 Kč / hod.",
        addition: "klienti v průměru využívají 1 – 5 hodin",
      },
    ],
    chosenProduct: "",
  },
  getters: {
    getItems: (state) => {
      return state.items;
    },
    getChosenProduct: (state) => {
      return state.chosenProduct;
    },
  },
  mutations: {
    setChosenProduct(state, payload) {
      state.chosenProduct = payload;
    },
  },
  actions: {},
  modules: {},
});
