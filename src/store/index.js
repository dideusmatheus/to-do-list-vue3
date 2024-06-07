import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
          todos: []
        }
    },

    mutations: {
        storeTodos(state, payload){
            state.todos = payload;
        }
    }
})