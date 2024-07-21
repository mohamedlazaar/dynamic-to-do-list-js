document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    function addTask(){
        const taskText = taskInput.value.trim();
        if(taskText != ''){
            const li = document.createElement('li');
            li.textContent = taskText;
            const removeBtn = document.createElement('button')
            removeBtn.textContent = 'Remove'
            removeBtn.classList.add('remove-btn');
            removeBtn.addEventListener('click', function(){
                li.remove();
            })
            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = '';
    }else{
        alert('enter task')
    }}
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keyup', function(event){
        if(event.key === 'Enter'){
            addTask();
            }
         })
    
})