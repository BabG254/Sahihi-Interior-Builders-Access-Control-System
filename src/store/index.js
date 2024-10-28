import Vuex from 'vuex';
import { mapState } from 'vuex';

const store = new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
});

export default store;