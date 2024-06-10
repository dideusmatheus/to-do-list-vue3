<template>
    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" @click="completed()">
            <font-awesome-icon v-if="isCompletes" :icon="['fas', 'check']" style="color: #11ff00;"/>
            <font-awesome-icon v-if="!isCompletes" :icon="['fas', 'xmark']" style="color: #ff0000;"/>
        </button>
        <input type="text" class="form-control" placeholder="" @keyup.enter="updateTodo($event)" v-model="title" aria-label="Item a fazer">
        <button class="btn btn-outline-secondary" type="button">
            <font-awesome-icon :icon="['fas', 'trash']"/>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                default: () => ({})
            },
        },
        data() {
            return {
                title: this.todo.title,
                isCompletes: this.todo.completed
            }
        },
        methods: {
           getTitleTodo() {
                if(!this.title){
                    return;
                }

                this.updateTodo();
            },
            updateTodo(){
                let payload = {
                    id: this.todo.id,
                    data: {
                        title: this.title,
                        completed: this.isCompletes
                    }
                };
                this.$store.dispatch('updateToDo', payload);
            },
            completed(){
                this.isCompletes = !this.isCompletes;
                this.updateTodo()
            }
        },
    }
</script>
