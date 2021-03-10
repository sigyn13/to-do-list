<template>
  <v-checkbox
    color="indigo darken-3"
    hide-details
    class="ma-0 pa-0"
    @click="changeCheckbox()"
  ></v-checkbox>
</template>

<script>
export default {
  components: {},
  name: "VCheckboxCustom",
  data() {
    return {};
  },
  computed: {},
  methods: {
    changeCheckbox() {
      this.$emit("setStatus");
    }
  }
};
</script>

<style lang="scss"></style>
