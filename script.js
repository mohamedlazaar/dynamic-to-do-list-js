document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from Local Storage
    loadTasks();
  
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false));
    }
  //   function addTask() {
  //     const taskText = taskInput.value.trim();
  
  //     if (taskText === '') {
  //       alert('Please enter a task');
  //       return;
  //     }
  
  //     const listItem = document.createElement('li');
  //     listItem.textContent = taskText;
  
  //     const removeBtn = document.createElement('button');
  //     removeBtn.textContent = 'Remove';
  //     removeBtn.classList.add('remove-btn');
  //     removeBtn.addEventListener('click', () => {
  //       taskList.removeChild(listItem);
  //     });
  
  //     listItem.appendChild(removeBtn);
  //     taskList.appendChild(listItem);
  
  //     taskInput.value = '';
  //   }
  // });
    function addTask(taskText, save = true) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
      removeBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
        removeTaskFromLocalStorage(taskText);
      });
  
      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);
  
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
  
      taskInput.value = '';
    }
  
    function removeTaskFromLocalStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  });