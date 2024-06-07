<template>
    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button">
            <font-awesome-icon :v-if="true" :icon="['fas', 'check']" style="color: #11ff00;"/>
            <font-awesome-icon :v-else-if="false" :icon="['fas', 'xmark']" style="color: #ff0000;"/>
        </button>
        <input type="text" class="form-control" placeholder="" aria-label="Item a fazer">
        <button class="btn btn-outline-secondary" type="button">
            <font-awesome-icon :icon="['fas', 'trash']"/>
        </button>
    </div>
</template>
