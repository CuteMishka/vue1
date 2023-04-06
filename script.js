new Vue({
  el: '#app',
  data: {
    tasks: [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: false },
      { description: 'Task 3', completed: false }
    ],
    newTask: ''
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') return;
      this.tasks.push({
        description: this.newTask,
        completed: false
      });
      this.newTask = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    toggleText(index) {
      label = document.getElementsByClassName("label")[index];
      if (label.style.textDecoration == "line-through") {
        label.style.textDecoration = "none";
      } else {
        label.style.textDecoration = "line-through";
      }
    }
  }
});