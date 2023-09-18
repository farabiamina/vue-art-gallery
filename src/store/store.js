// import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from 'vuex'

import favorites from './favorites'

// Vue.use(Vuex)

export default createStore({
    modules: {
        favorites
    }
})