<template>
  <v-card class="mb-5 pa-0">
    <div class="d-flex">
      <v-card-text class="d-flex flex-column pb-0" v-if="task.type === 'book'">
        <h4 class="text--primary text-left">
          {{ task.name }}
        </h4>
        <p class="text--primary text-left ma-0">
          {{ "Автор: " + task.author }}
        </p>
      </v-card-text>

      <v-card-text class="d-flex flex-column pb-0" v-else>
        <h4 class="text--primary text-left">
          {{ task.name }}
        </h4>
        <p class="text--primary text-left ma-0">
          {{ "Режиссер: " + task.author }}
        </p>
      </v-card-text>

      <v-checkbox
        v-model="status"
        color="indigo darken-3"
        hide-details
        class="ma-3"
      ></v-checkbox>
    </div>
    <div class="d-flex pa-3">
      <p class="">Жанр:</p>
      <span
        v-for="item in task.genre"
        :key="item.id"
        class="ml-2 text--primary text-left"
      >
        {{ item.name }}
      </span>
    </div>

    <v-card-actions class="d-flex justify-end">
      <v-btn text color="deep-purple accent-4">
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  components: {},
  name: "Task",
  data() {
    return {
      status: false
    };
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
