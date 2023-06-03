document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  //As a user, I should be able to type a task into the input field.
  //As a user, I should be able to click some form of a submit button.
  //As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
  
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  function addTask(e){
    e.preventDefault();
     const newTaskDescription = document.getElementById('new-task-description').value;
    console.log(newTaskDescription);
    
    const li = document.createElement('li');
      li.appendChild(document.createTextNode(newTaskDescription));
      const deleteBtn = document.createElement('button');
      deleteBtn.appendChild(document.createTextNode('X'));
      li.appendChild(deleteBtn);
       taskList.appendChild(li);

  }

  function removeTask(e) {
    if (e.target.nodeName === 'BUTTON') {
      if(confirm('Please Confirm')) {
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }

  }

});
