import VueCookie from 'vue-cookie'
import CookieParser from 'cookieparser'

export const state = () => ({
    authUser: ""
})

export const mutations = {
    SET_AUTH_USER (state, user) {
        state.authUser = user
    }
}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        if(req && req.headers && req.headers.cookie) {
            const cookieParsed = CookieParser.parse(req.headers.cookie)
            const data = {
                username: cookieParsed._____AuthUsername,
                room: cookieParsed._____AuthRoom
            }

            commit('SET_AUTH_USER', data)
        }
    },
    async login ({ commit }, { username, room }) {
        try {
            const data = {
                username: username,
                room: room
            }

            VueCookie.set("_____AuthUsername", username)
            VueCookie.set("_____AuthRoom", room)

            commit('SET_AUTH_USER', data)
        }
        catch (error) {
            throw error
        }
    },
    async logout ({ commit }) {
        try {
            VueCookie.delete("_____AuthUsername")
            VueCookie.delete("_____AuthRoom")
            
            commit('SET_AUTH_USER', "")
        }
        catch (error) {
            console.error(error)
        }
    }

}
