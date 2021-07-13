const todoArr = [];
window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todoArr.push(todoText);
        console.log(todoArr);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        for(let i = 0; i < todoArr.length; i++){
            todoList.innerHTML += '<li>' + todoArr[i] + '</li>';
        }
    }
}