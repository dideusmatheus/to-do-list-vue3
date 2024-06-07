<template>
  
  <div class="row">
    <div class="col-12 d-flex justify-content-center">

      <!-- Spinner -->
      <div class="col-12 mb-4" v-if="showSpinner">
        <SpinnerLoading></SpinnerLoading>
      </div>

      <!-- Card -->
      <div class="card">

        <div class="col-12">
          <h3>Lista de tarefas</h3>
        </div>

        <!-- Form -->
        <div class="col-12">
          <InputAddForm></InputAddForm>
        </div>

        <!-- List Itens To Do -->
        <div class="col-12" v-if="$store.state.todos.length > 0">
          <ListItens></ListItens>
        </div>

        <!-- Item Empty -->
        <div class="col-12" v-else-if="$store.state.todos.length == 0">
          <ItemEmpty></ItemEmpty>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
  import SpinnerLoading from './components/SpinnerLoading.vue'
  import InputAddForm from './components/InputAddForm.vue'
  import ListItens from './components/ListItens.vue'
  import ItemEmpty from './components/ItemEmpty.vue'
  import axios from 'axios'

  export default {
    name: 'App',

    data() {
      return {
        urlBase: 'http://localhost:3000/',
        showSpinner: false,
      };
    },

    components: {
      SpinnerLoading,
      InputAddForm,
      ListItens,
      ItemEmpty
    },

    created(){
      this.showSpinner = true;

      axios.get(`${this.urlBase}todos`)
      .then((responseToDos) => {
        this.$store.commit('storeTodos', responseToDos.data)
      })
      .finally(
        setTimeout(() => {
        this.showSpinner = false;
      }, 2000)
      );
    },

  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
  .card {
      border-radius: 10px;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1),
                  -5px -5px 15px rgba(255, 255, 255, 0.7);
      padding: 20px;
      text-align: center;
      justify-content: center;
      width: 500px;
      transition: transform 0.3s;
  }
</style>
