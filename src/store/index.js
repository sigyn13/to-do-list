import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import "../assets/scss/main.scss";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    SET_TASKS_TO_STATE: (state, tasks) => {
      state.tasks = tasks;
    }
  },
  actions: {
    GET_TASKS_FROM_API({ commit }) {
      return axios("http://localhost:3000/tasks", {
        method: "GET"
      })
        .then(tasks => {
          commit("SET_TASKS_TO_STATE", tasks.data);
          return tasks;
        })
        .catch(error => error);
    }
  },
  getters: {
    TASKS(state) {
      return state.tasks;
    }
  },
  modules: {}
});
