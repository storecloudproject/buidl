import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Prefs from "@/modules/prefs";
import Events from "@/modules/events";
import Outputs from "@/modules/outputs";
import Wallet from "@/modules/wallet";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "buidl",
      paths: [
        "prefs.darkTheme",
        "prefs.site",
        "prefs.web3Provider.using",
        "prefs.web3Provider.custom",
        "wallet.all"
      ]
    })
  ],
  modules: {
    events: Events,
    prefs: Prefs,
    outputs: Outputs,
    wallet: Wallet
  }
});
