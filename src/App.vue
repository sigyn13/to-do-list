<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-3" dense dark>
      <v-btn icon>
        <v-icon color="deep-purple lighten-5">mdi-check-all</v-icon>
      </v-btn>

      <v-toolbar-title>List to do</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <task-list
        :lists="lists"
        :indexPage="indexPage"
        @setViewPage="setViewPage()"
      />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TaskList from "./components/TaskList.vue";

export default {
  components: { TaskList },
  name: "App",
  data() {
    return {
      lists: [
        { type: "all", text: "All tasks", icon: "mdi-check-all" },
        {
          type: "book",
          text: "List of books to read",
          icon: "mdi-book-open-blank-variant"
        },
        {
          type: "movie",
          text: "List of movies to watchs",
          icon: "mdi-video-vintage"
        }
      ],
      indexPage: true
    };
  },
  computed: {
    ...mapGetters(["TASKS"])
  },
  methods: {
    ...mapActions(["GET_TASKS_FROM_API"]),
    setViewPage() {
      this.indexPage = !this.indexPage;
    }
  },
  mounted() {
    this.GET_TASKS_FROM_API();
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.v-application {
  font-family: "Axiforma-Light" !important;
}
</style>
