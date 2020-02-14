import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import documentbuilder from "./modules/documentbuilder";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    documentbuilder,
  },
  strict: true,
});
