<template>
  <div class="d-flex mb-6">
    <v-list shaped max-width="300px">
      <v-subheader>Lists</v-subheader>
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
    }
  },
  data() {
    return {
      selectedItem: 0,
      currentType: "All"
    };
  },
  computed: {
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
    choosenList(list) {
      this.currentType = list.type;
    }
  }
};
</script>

<style lang="scss"></style>
