<template>
    <div>
        <InputItem v-for="todo in $store.state.todos" :key="todo.id" :todo="todo"></InputItem>
    </div>
</template>

<script>
    import InputItem from '@/components/InputItem.vue'

    export default {
        components: {
            InputItem
        }
    }
</script>

<style lang="scss" scoped>

</style>