const app = new Vue({
  el: '#app',
  data: {
    todos: [
      {
        name: 'A to do',
        complete: false
      },
      {
        name: 'Another to do',
        complete: false
      },
      {
        name: 'And another one',
        complete: false
      }
    ],
    newTodo: {
      name: ''
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: this.newTodo.name,
        complete: false
      });
      this.newTodo.name = '';
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  }
});