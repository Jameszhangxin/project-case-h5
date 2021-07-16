import Vue from 'vue';
import Vuex from 'vuex';

// 引入模块
import navigation from './modules/navigation';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        navigation
    }
});
