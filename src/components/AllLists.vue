<template>
  <v-list shaped max-width="300px">
    <v-list-item-group v-model="selectedItem" color="deep-purple darken-3">
      <v-list-item
        v-for="list in lists"
        :key="list.type"
        @click="choosenList(list)"
      >
        <v-list-item-icon>
          <v-icon v-text="list.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="list.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  components: {},
  name: "AllLists",
  props: {
    lists: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      selectedItem: 0
    };
  },
  computed: {},
  methods: {
    choosenList(list) {
      this.$emit("choosenList", list);
    }
  }
};
</script>

<style lang="scss"></style>
