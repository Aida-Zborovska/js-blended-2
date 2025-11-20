const STORAGE_KEY = 'tasks';

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

export default { getTasks, saveTask, initTasks, deleteTask };
