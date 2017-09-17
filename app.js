const app = new Vue({
  el: '#app',
  data: {
    // Get todos from localstorage or create empty array
    todos: JSON.parse(localStorage.getItem('vue-todos')) || [],
    // Temporarily store new todo info
    newTodo: {
      name: ''
    }
  },
  methods: {
    addTodo() {
      // Only add a todo if a name exists
      if(this.newTodo.name != '') {
        this.todos.push({
          name: this.newTodo.name,
          complete: false
        });
        
        // Reset new todo name
        this.newTodo.name = '';
      }
    },
    removeTodo(todo) {
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