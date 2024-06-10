<template>
    <form class="input-group mb-3" @submit.stop.prevent="addToDo()">
        <input type="text" class="form-control" v-model="title" placeholder="Adicionar um nome item..." aria-label="Adicionar um nome item...">
        <button class="btn btn-outline-primary" type="submit" id="button-addon2">Adicionar</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addToDo() {
                if(!this.title){
                    return;
                }

                let newToDo = {
                    title: this.title,
                    completed: false
                }

                this.$store.dispatch('addToDo', newToDo)
                .finally(() => {
                    this.title = '';
                })
            }
        },
    }
</script>

