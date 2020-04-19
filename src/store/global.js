const state = {
    isDev: false
}

const getters = {
    isDev: () => state.isDev
}

const mutations = {
    changeIsDev(state, status) {
        state.isDev = status
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}