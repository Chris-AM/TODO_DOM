const todoArr = JSON.parse(localStorage.getItem('todoArr')) || [];
const render = () => {
    const todoList = document.getElementById('todo-list');
    const todoTemplate = todoArr.map(newTODO => '<li>' + newTODO + '</li>');
    todoList.innerHTML = todoTemplate.join('');
    const getToDo = document.querySelectorAll('#todo-list li');
    getToDo.forEach((element, index) => {
        element.addEventListener('click', () => {
            element.parentNode.removeChild(element);
            todoArr.splice(index, 1);
            render();
            console.log(todoArr, index);
        })
    });
}
window.onload = () => {
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todoArr.push(todoText);
        const todoStrings = JSON.stringify(todoArr);
        localStorage.setItem('todoArr', todoStrings);
        render();
    }
}