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
        },
        updateTodos(state, payload){
            state.todos.unshift(payload);
        }
    },

    actions: {
        getTodos({ commit }) {
            return axios.get(`${this.state.urlBase}todos`)
                .then((responseToDos) => {
                    commit('storeTodos', responseToDos.data);
                });
        },
        addToDo({ commit }, data){
            return axios.post(`${this.state.urlBase}todos`, data)
            .then((response) => {
                commit('updateTodos', response.data);
            });
        }
    }
})