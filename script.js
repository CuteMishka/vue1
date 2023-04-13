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
      if (document.querySelector('.pole').placeholder == 'edit here')(
        this.tasks.description = document.querySelector('.pole')
        )
      this.newTask = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    edit(index) {
      document.querySelector('.pole').placeholder = 'edit here';
    }
  }
});
