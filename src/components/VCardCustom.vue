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
      <v-checkbox-custom @setStatus="setStatus" />
    </div>
    <div class="d-flex pa-4 pb-0">
      <p class="ma-0">Жанр:</p>
      <span
        v-for="item in task.genre"
        :key="item.id"
        class="ml-2 text--primary text-left"
      >
        {{ item.name }}
      </span>
    </div>
    <v-expand-transition v-if="moreVisible">
      <v-card class="text--primary text-left description">
        <p class="pa-4">{{ task.description }}</p></v-card
      >
    </v-expand-transition>

    <v-card-actions class="d-flex justify-end">
      <v-button
        @setVisible="setVisible"
        :btnInner="btnInner"
        :moreVisible="moreVisible"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import VButton from "./VButton.vue";
import VCheckboxCustom from "./VCheckboxCustom.vue";
export default {
  components: { VButton, VCheckboxCustom },
  name: "VCardCustom",
  data() {
    return {
      status: false,
      moreVisible: false,
      btnInner: { visible: "Скрыть", unVisible: "Подробнее" }
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
  computed: {},
  methods: {
    setStatus() {
      this.status = !this.status;
    },
    setVisible() {
      this.moreVisible = !this.moreVisible;
    }
  }
};
</script>

<style lang="scss">
.description {
  border: none !important;
  box-shadow: none !important;
}
</style>
