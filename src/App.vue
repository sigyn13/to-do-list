<template>
  <v-app>
    <top-bar />
    <v-main>
      <div class="d-flex justify-space-between">
        <all-lists :lists="lists" @choosenList="choosenList" />
        <div class="col-8">
          <v-card-custom v-for="item in taskList" :key="item.id" :task="item" />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AllLists from "./components/AllLists.vue";
import TopBar from "./components/TopBar.vue";
import VCardCustom from "./components/VCardCustom.vue";

export default {
  components: { AllLists, TopBar, VCardCustom },
  name: "App",
  data() {
    return {
      lists: [
        { type: "All", text: "All tasks", icon: "mdi-check-all" },
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
      currentType: "All"
    };
  },
  computed: {
    ...mapGetters(["TASKS"]),
    tasks() {
      return this.$store.getters.TASKS;
    },
    taskList() {
      const listOfType = this.tasks.filter(i => i.type === this.currentType);
      if (this.currentType === "All") {
        return this.tasks;
      }
      return listOfType;
    }
  },
  methods: {
    ...mapActions(["GET_TASKS_FROM_API"]),
    choosenList(list) {
      this.currentType = list.type;
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
  margin-top: 20px;
}

.v-application {
  font-family: "Axiforma-Light" !important;

  a {
    color: #4527a0 !important;
  }
}
</style>
