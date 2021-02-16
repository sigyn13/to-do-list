<template>
  <v-checkbox
    v-model="status"
    color="indigo darken-3"
    hide-details
    class="ma-3"
  ></v-checkbox>
</template>

<script>
export default {
  components: {},
  name: "Task",
  data() {
    return {};
  },
  props: {
    status: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {}
};
</script>

<style lang="scss"></style>
