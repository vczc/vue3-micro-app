import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  initGlobalState,
  start,
} from "qiankun";

registerMicroApps([
  {
    name: "vue-micro-app",
    entry: "//10.114.146.232:8081",
    container: "#micro-container",
    activeRule: "#/vue2-micro-app",
  },
]);

addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
  const { message: msg } = event;
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    console.error("微应用加载失败，请检查应用是否可运行");
  }
});

const state = {};
export const actions = initGlobalState(state);
actions.setGlobalState({
  globalToken: "",
});

export default start;
