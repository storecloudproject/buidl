import { ActionContext, Action } from "vuex";

export default {
  namespaced: true,
  state: {
    resizeEditor: false,
    lityPanel: "",
    dappPanel: "",
    compilerReady: false,
    lityOutputTab: "problems"
  },
  mutations: {
    triggerEditorResize(state: any) {
      state.resizeEditor = !state.resizeEditor;
    },
    setLityPanel(state: any, content: string) {
      state.lityPanel = content;
    },
    setDappPanel(state: any, content: string) {
      state.dappPanel = content;
    },
    compilerReady(state: any) {
      state.compilerReady = true;
    },
    setLityOutputTab(state: any, content: string) {
      state.lityOutputTab = content;
    }
  },
  actions: {
    triggerEditorResize(context: ActionContext<any, any>) {
      context.commit("triggerEditorResize");
    },
    setLityPanel(context: ActionContext<any, any>, payload: string) {
      context.commit("setLityPanel", payload);
    },
    setDappPanel(context: ActionContext<any, any>, payload: string) {
      context.commit("setDappPanel", payload);
    },
    compilerReady(context: ActionContext<any, any>) {
      context.commit("compilerReady");
    },
    setLityOutputTab(context: ActionContext<any, any>, payload: string) {
      context.commit("setLityOutputTab", payload);
    }
  }
};
