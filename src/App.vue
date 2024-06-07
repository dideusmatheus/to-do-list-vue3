<template>

  <div class="row">
    <div class="col-12 d-flex justify-content-center">
      <!-- Card -->
      <div class="card">

        <div class="row">

          <div class="col-12 mb-4">
            <!-- Spinner -->
            <SpinnerLoading></SpinnerLoading>
          </div>
          
        </div>
      </div>

    </div>
  </div> 

</template>

<script>
import SpinnerLoading from './components/SpinnerLoading.vue'

export default {
  name: 'App',
  components: {
    SpinnerLoading,
  }
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
