import axios from "axios";

export default {
  state: () => ({
    todos: [],
  }),
  getters: {},
  mutations: {
    SET_TODOS(state, payload) {
      state.todos = payload
    },
  },
  actions: {
    getTodos({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
          commit("SET_TODOS", response.data);
          resolve(response);
        }).catch((error) => reject(error));
      });
    }
  },
}