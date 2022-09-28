import { createStore } from 'vuex'
import user from "./modules/user";
import photos from "./modules/photos";

// Create a new store instance.
const store = createStore({
  modules: {
    user,
    photos
  },
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default store