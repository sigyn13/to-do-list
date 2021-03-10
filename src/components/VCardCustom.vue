<template>
  <v-card class="mb-5 pa-6">
    <div class="d-flex justify-space-between">
      <div class="d-flex flex-column pb-0" v-if="task.type === 'book'">
        <h4 class="text--primary text-left">
          {{ task.name }}
        </h4>
        <v-subheader class="text--primary text-left pa-0"> Автор: </v-subheader>
        <p class="ma-0 text--primary text-left">
          <a>{{ task.author }}</a>
        </p>
      </div>

      <div class="d-flex flex-column pb-0" v-if="task.type === 'movie'">
        <h4 class="text--primary text-left">
          {{ task.name }}
        </h4>
        <v-subheader class="pa-0 mt-3">Режиссер:</v-subheader>
        <ul class="list pa-0">
          <li
            class="list__item text--primary text-left"
            v-for="person in task.author"
            :key="person.id"
          >
            <a :href="person.link">{{ person.name }}</a>
          </li>
        </ul>
      </div>
      <v-checkbox-custom @setStatus="setStatus" />
    </div>

    <v-expand-transition v-if="moreVisible">
      <v-card class="description d-flex">
        <div class="d-flex flex-column">
          <div class="d-flex flex-column pb-0 mt-3">
            <v-subheader class="pa-0">Жанр:</v-subheader>
            <ul class="list pa-0">
              <li
                class="list__item text--primary text-left"
                v-for="genre in task.genre"
                :key="genre.id"
              >
                {{ genre.name }}
              </li>
            </ul>
          </div>
          <div class="mt-3" v-if="task.type === 'movie'">
            <v-subheader class="pa-0">В ролях:</v-subheader>
            <ul class="list pa-0">
              <li
                class="list__item text--primary text-left"
                v-for="person in task.actors"
                :key="person.id"
              >
                <a :href="person.link">{{ person.name }}</a>
              </li>
            </ul>
          </div>
          <article class="text--primary text-left mt-3">
            {{ task.description }}
          </article>
        </div>
        <v-img
          v-if="task.poster"
          height="300"
          width="200"
          contain
          :src="task.poster"
          position="right"
          class="ma-4"
        ></v-img>
      </v-card>
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
.list {
  list-style-type: none;
  text-align: left;

  &__item {
    margin: 0;
    padding: 0;
  }
}

.v-subheader {
  height: auto !important;
}
</style>
