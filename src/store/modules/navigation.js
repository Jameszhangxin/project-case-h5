const state = {
    currentData: '初始值'
};

const getters = {
    'GET_CURRENT_DATA': state => state.currentData
};

const mutations = {
    'UPDATE_CURRENT_DATA' (state, payload) {
        state.currentData = payload;
    }
};

export default {
    state,
    getters,
    mutations
};
