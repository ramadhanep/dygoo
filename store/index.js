import axios from 'axios'

export const state = () => ({
    authUser: null
})

export const mutations = {
    SET_AUTH_USER (state, user) {
        state.authUser = user
    }
}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        if (req.session && req.session.authUser) {
            commit('SET_AUTH_USER', req.session.authUser)
        }
    },
    async login ({ commit }, { username, room }) {
        try {
            const response = await axios.post('/api/login', { username, room })

            commit('SET_AUTH_USER', response.data)
        }
        catch (error) {
            throw error
        }
    },
    async logout ({ commit }) {
        try {
            const response = await axios.post('/api/logout')
    
            commit('SET_AUTH_USER', null)
            return response
        }
        catch (error) {
            console.error(error)
        }
    }

}
