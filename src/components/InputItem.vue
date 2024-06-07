<template>
    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button">
            <font-awesome-icon v-if="todo.completed" :icon="['fas', 'check']" style="color: #11ff00;"/>
            <font-awesome-icon v-if="!todo.completed" :icon="['fas', 'xmark']" style="color: #ff0000;"/>
        </button>
        <input type="text" class="form-control" placeholder="" :value="todo.title" aria-label="Item a fazer">
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
        }
    }
</script>
