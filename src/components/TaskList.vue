<template>
  <div class="d-flex mb-6">
    <v-list shaped max-width="300px">
      <v-subheader>Lists</v-subheader>
      <v-list-item-group v-model="selectedItem" color="deep-purple darken-3">
        <v-list-item
          v-for="list in lists"
          :key="list.type"
          @click="getTypeOfList(list)"
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
    <div>
      <task v-for="item in taskList" :key="item.id" :task="item" />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  name: "TaskList",
  props: {
    lists: {
      type: Array,
      default() {
        return [];
      }
    },
    indexPage: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      taskList: this.$store.getters.TASKS,
      selectedItem: 1
    };
  },
  computed: {},
  methods: {
    getTypeOfList(list) {
      let tasks = this.$store.getters.TASKS;

      setTimeout(() => {
        this.$emit("setViewPage", list);
        if (list.type === "all") {
          this.taskList = tasks;
        } else {
          this.taskList = tasks.filter(i => i.type === list.type);
        }
      }, 1000);
    }
  },
  mounted() {}
};
</script>

<style lang="scss"></style>
