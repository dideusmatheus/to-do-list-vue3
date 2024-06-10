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
        updateListTodos(state, payload){
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
                commit('updateListTodos', response.data);
            });
        },
        updateToDo(context, {id, data}){
            return axios.put(`${this.state.urlBase}todos/${id}`, data);
        },
    }
})