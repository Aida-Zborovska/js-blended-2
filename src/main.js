import {
  onFormSubmit,
  onTaskDelete,
  applyLocalTheme,
  onThemeToggle,
} from './js/handlers';
import { refs } from './js/refs';
import localStorageApi from './js/local-storage-api';
import { renderTasks } from './js/render-tasks';

applyLocalTheme();
localStorageApi.initTasks();
renderTasks(localStorageApi.getTasks());

refs.form.addEventListener('submit', onFormSubmit);
refs.taskList.addEventListener('click', onTaskDelete);
refs.themeToggleBtn.addEventListener('click', onThemeToggle);
