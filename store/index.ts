import Vue from 'vue';
import Vuex from 'vuex';
import User from './user';

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
      state: {

      },
      modules: {
          User
      },
  });
}

export default store;
