import axios from "axios";

export default {
  state: () => ({
    users: [],
  }),
  getters: {},
  mutations: {
    SET_USER(state, payload) {
      state.users = payload
    },
  },
  actions: {
    getUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
          commit("SET_USER", response.data);
          resolve(response);
        }).catch((error) => reject(error));
      });
    }
  },
}