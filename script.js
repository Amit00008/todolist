document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const themeBtn = document.getElementById('theme-btn');
    const themeStyle = document.getElementById('theme-style');

    let themes = ['styles.css', 'dark-theme.css', 'light-theme.css'];
    let currentThemeIndex = 0;

    addBtn.addEventListener('click', addTodo);
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

    themeBtn.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        themeStyle.href = themes[currentThemeIndex];
    });

    function addTodo() {
        const todoText = input.value.trim();
        if (todoText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        input.value = '';
    }
});
