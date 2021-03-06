export const state = () => ({
  token: {},
  user: {}
})

export const getters = {
  isAuthenticated (state) {
    return !!state.token
  }
}

export const mutations = {
  setToken (state, payload) {
    state.token = Object.assign({}, payload)
  },
  setUser (state, payload) {
    state.user = Object.assign({}, payload)
  }
}

export const actions = {
  async login ({ commit }, payload) {
    const params = new URLSearchParams()
    for (const key in payload) {
      params.append(key, payload[key])
    }

    const {
      data: { data }
    } = await this.$service.signin(params)
    console.log(data)

    if (!data) { return false }

    commit('setUser', data.user)
    commit('setToken', data.token)
    return true
  },

  async logout ({ commit }) {
    try {
      await this.$service.signout()
    } catch (error) {
      // nothing
    }
    commit('setUser', null)
    commit('setToken', null)
  }
}
