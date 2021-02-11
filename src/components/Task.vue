<template>
  <v-card class="mx-auto" max-width="80%">
    <v-card-text class="d-flex">
      <p class="text--primary">
        {{ task.name }}
      </p>
      <p>{{ task.author }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4">
        Learn More
      </v-btn>
    </v-card-actions>
    <h3></h3>
    <h3></h3>
  </v-card>
</template>

<script>
export default {
  components: {},
  name: "Task",
  data() {
    return {};
  },
  props: {
    task: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.TASKS;
    },
    movies() {
      return this.tasks.filter(i => i.type === "movie");
    },
    books() {
      return this.tasks.filter(i => i.type === "book");
    }
  }
};
</script>

<style lang="scss"></style>
