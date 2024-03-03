<script>
import { useShowFormStore } from '../stores/showForm.js';

export default {
    data() {
        return {
            formData: {
                task: '',
                time: ''
            },
            formStore: useShowFormStore(),
            todoItems: JSON.parse(localStorage.getItem('todo')) || [],
            todoState: JSON.parse(localStorage.getItem('todo'))?.length > 0,
            componentKey: 0
        };
    },

    methods: {
        handleCreateTodo(newTodo) {
            const existingTodos = JSON.parse(localStorage.getItem('todo')) || [];
            const updatedTodos = [...existingTodos, newTodo];
            localStorage.setItem('todo', JSON.stringify(updatedTodos));
            this.todoItems = JSON.parse(localStorage.getItem('todo')) || [];
            this.todoState = this.todoItems.length > 0;
        },
        handleDeleteTodo(index) {
            const deletedTodo = this.todoItems.filter((_, i) => i !== index)
            localStorage.setItem('todo', JSON.stringify(deletedTodo));
            this.todoItems = JSON.parse(localStorage.getItem('todo')) || [];
            if(this.todoItems.length === 0) {
                this.todoState = this.todoItems.length = 0;
            }
        },
        handleForm() {
            const newTodo = {
                task: this.formData.task,
                time: this.formData.time
            };
            this.handleCreateTodo(newTodo);
            this.formStore.hideFormFunction();
            this.formData = {
                task: '',
                time: ''
            };
        },
        forceRerender() {
            this.componentKey += 1;
        }
    }
};
</script>

<template>
    <section :key="componentKey" id="app-body">
        <div class="todo-container">
            <div class="new-todo-container">
                <h1 v-if="!formStore.showForm">Add New Todo...</h1>
                <template v-if="formStore.showForm">
                    <h3>New Todo:</h3>
                    <form @submit.prevent="handleForm">
                        <label for="task">Task:</label>
                        <input 
                            type="text" 
                            name="task" 
                            v-model="formData.task" 
                            placeholder="Enter Todo Name..."
                            required 
                        />

                        <label for="time">Date/Time:</label>
                        <input 
                            type="text" 
                            name="time" 
                            v-model="formData.time" 
                            placeholder="Date: Time..." required 
                        />

                        <input class="submit-btn" type="submit" value="CREATE TODO" />
                    </form>
                </template>
            </div>

            <br />

            <div class="todo-display">
                <h3>Current Todos:</h3>
                <p v-if="!todoState">None...</p>

                <template v-if="todoItems">
                    <div v-for="(todo, index) in todoItems" :key="index" class="todo-item"
                        @click="handleDeleteTodo(index)">
                        <h4>{{ todo.task }}</h4>
                        <p>{{ todo.time }}</p>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>