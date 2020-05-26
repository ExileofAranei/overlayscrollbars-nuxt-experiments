export const state = () => ({
  strictSidebar: false
});

export const getters = {
  strictSidebar: state => state.strictSidebar
};

export const mutations = {
  STRICT_SIDEBAR(state, value) {
    state.strictSidebar = value;
  }
};

export const actions = {
  setSidebarStrict({ commit }, value) {
    commit("STRICT_SIDEBAR", value);
  }
};
