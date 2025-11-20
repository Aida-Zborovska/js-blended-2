const STORAGE_KEY = 'tasks';
const BODY = document.body;

function getTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function initTasks() {
  const tasks = getTasks() ?? [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function deleteTask(taskId) {
  const tasks = getTasks();
  1;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(tasks.filter(task => task.id !== taskId))
  );
}

function getTheme() {
  initTheme();
  return localStorage.getItem('theme');
}

function initTheme() {
  if (localStorage.getItem('theme')) {
    return;
  }
  const theme = BODY.classList.contains('theme-dark')
    ? 'theme-dark'
    : 'theme-light';
  localStorage.setItem('theme', theme);
}

function setTheme(theme) {
  localStorage.setItem('theme', theme);
}

export default {
  getTasks,
  saveTask,
  initTasks,
  deleteTask,
  getTheme,
  setTheme,
};
