import Vue from 'vue';
import Vuex from 'vuex';
import userstoremodule from './user.store.module';

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
      state: {
        // add state
      },
      modules: {
        userstoremodule,
      },
  });
}

export default store;
