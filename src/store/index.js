import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
    state () {
        return {
          todos: [],
          urlBase: 'http://localhost:3000/',
        }
    },

    mutations: {
        storeTodos(state, payload){
            state.todos = payload;
        }
    },

    actions: {
        getTodos({commit}) {
            return axios.get(`${this.state.urlBase}todos`)
                .then((responseToDos) => {
                    commit('storeTodos', responseToDos.data)
                })
        },
    }
})