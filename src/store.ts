import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Prefs from "@/modules/prefs";
import Events from "@/modules/events";
import Outputs from "@/modules/outputs";
import Wallet from "@/modules/wallet";
import Contracts from "@/modules/contracts";
import Deployed from "@/modules/deployed";
import Editor from "@/modules/editor";

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
        "wallet",
        "editor.text"
      ]
    })
  ],
  modules: {
    events: Events,
    prefs: Prefs,
    outputs: Outputs,
    wallet: Wallet,
    contracts: Contracts,
    deployed: Deployed,
    editor: Editor
  }
});