import axios from "axios";

export default {
  state: () => ({
    photos: [],
  }),
  getters: {},
  mutations: {
    SET_PHOTOS(state, payload) {
      state.photos = payload
    },
  },
  actions: {
    getPhotos({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((response) => {
          commit("SET_PHOTOS", response.data);
          resolve(response);
        }).catch((error) => reject(error));
      });
    }
  },
}