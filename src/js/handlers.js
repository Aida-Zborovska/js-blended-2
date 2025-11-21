import { nanoid } from 'nanoid';
import iziToast from 'izitoast';
import localStorageApi from './local-storage-api';
import { renderTasks } from './render-tasks';

const BODY = document.body;

export function onFormSubmit(e) {
  e.preventDefault();
  const { taskName, taskDescription } = e.target.elements;
  const name = taskName.value.trim();
  const description = taskDescription.value.trim();
  if (!name || !description) {
    showAlert();
    return;
  }
  const task = {
    name,
    description,
    id: nanoid(),
  };
  localStorageApi.saveTask(task);
  const tasks = localStorageApi.getTasks();

  renderTasks(tasks);
  e.target.reset();
}

export function onTaskDelete(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const taskId = e.target.dataset.id;
  localStorageApi.deleteTask(taskId);
  const tasks = localStorageApi.getTasks();
  renderTasks(tasks);
}

export function applyLocalTheme() {
  const theme = localStorageApi.getTheme();
  setThemeClass(theme);
}

function setThemeClass(theme) {
  if (theme === 'theme-dark') {
    BODY.classList.replace('theme-light', 'theme-dark');
  } else {
    BODY.classList.replace('theme-dark', 'theme-light');
  }
}

export function onThemeToggle() {
  const isDark = BODY.classList.contains('theme-dark');
  const newTheme = isDark ? 'theme-light' : 'theme-dark';
  setThemeClass(newTheme);
  localStorageApi.setTheme(newTheme);
}

function showAlert() {
  iziToast.show({
    message: 'Всі поля мають бути заповнені',
    position: 'topRight',
    messageColor: '#FFFFFF',
    backgroundColor: '#EF4040',
  });
}
