<template>
  <v-btn text color="deep-purple accent-4" @click="clickBtn()">
    {{ btnText }}
  </v-btn>
</template>

<script>
export default {
  components: {},
  name: "vButton",
  data() {
    return {};
  },
  computed: {
    btnText() {
      if (this.moreVisible === true) {
        return this.btnInner.visible;
      }
      return this.btnInner.unVisible;
    }
  },
  props: {
    btnInner: {
      type: Object,
      default() {
        return {};
      }
    },
    moreVisible: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    clickBtn() {
      this.$emit("setVisible");
    }
  },
  mounted() {}
};
</script>

<style lang="scss"></style>
