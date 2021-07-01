//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);

//functions
function addTodo(event) {
    event.preventDefault();
    //todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //crateLi
    const newTodo = document.createElement('li');
    newTodo.innerText = event.target.value; 
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //checked mark
    const competedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //trashButton
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-check"></i>';
    trashButton.classList.add('complete-btn');
    todoDiv.appendChild(trashButton);
    //append to Li
    todoList.appendChild(todoDiv);
};