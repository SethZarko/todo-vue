<script>
    import { useShowFormStore } from '../stores/showForm.js';

    export default {
        data() {
            return {
                formStore: useShowFormStore()
            };
        }
    } 
</script>

<template>
    <header>
        <hr />
        <div class="header-container">
            <h1>ToDoTech</h1>
            <button :class="{ 'disabled-btn': formStore.showForm, 'submit-btn': !formStore.showForm }" @click="formStore.showFormFunction()"
                :disabled="formStore.showForm">Add ToDo</button>
        </div>
        <hr />
    </header>
</template>