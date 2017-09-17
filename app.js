// Add Task Form component
Vue.component('add-task-form', {
  template: `
    <div>
      <form v-on:submit.prevent="addTodo">
        <h3>Add a new task</h3>
        <input type="text" v-model="newTodo">
        <input type="submit" value="Add">
      </form>
    </div>
  `,
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      // Only add a todo if a name exists
      if(this.newTodo != '') {
        const todo = {
          name: this.newTodo,
          complete: false
        };
        // Emit add-todo event to parent with new todo
        this.$emit('add-todo', todo);
        // Reset new todo name
        this.newTodo = '';
      }
    }
  }
});

// Main Vue instance
const app = new Vue({
  el: '#app',
  data: {
    // Get todos from localstorage or create empty array
    todos: JSON.parse(localStorage.getItem('vue-todos')) || []
  },
  methods: {
    addNewTodo(todo) {
      // Add new todo to todos
      this.todos.push(todo);
    },
    removeTodo(todo) {
      // Remove todo from todos
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    updateTodo(todo) {
      // Remove todo if the name is empty
      if(todo.name == '') {
        this.removeTodo(todo);
      }
    }
  },
  watch: {
    // Watch for changes in todos
    todos: {
      handler(todos) {
        // Save todos to localstorage
        window.localStorage.setItem('vue-todos', JSON.stringify(todos));
      },
      // Watch for changes in nested properties
      deep: true
    }
  }
});