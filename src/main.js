import { onFormSubmit, onTaskDelete } from './js/handlers';
import { refs } from './js/refs';
import localStorageApi from './js/local-storage-api';
import { renderTasks } from './js/render-tasks';

localStorageApi.initTasks();
renderTasks(localStorageApi.getTasks());

refs.form.addEventListener('submit', onFormSubmit);
refs.taskList.addEventListener('click', onTaskDelete);
