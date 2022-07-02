<template>
  <icomoon :iconSet="iconSet" v-bind="props" />
</template>

<script>
import { Icomoon } from "vue-icomoon";
import iconSet from "../../assets/svg/selection.json";

export default {
  name: "v-icon",
  components: {
    Icomoon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      props,
      iconSet,
    };
  },
};
</script>
