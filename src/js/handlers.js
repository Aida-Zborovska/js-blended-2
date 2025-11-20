import { nanoid } from 'nanoid';
import { refs } from './refs';
import localStorageApi from './local-storage-api';
import { renderTasks } from './render-tasks';

// Після натискання кнопки "Add" завдання має бути додано до списку.

// 4. Видалення завдань:

// Кожне завдання має бути видалене за допомогою кнопки "Delete".

// 5. Збереження в localStorage:

// Завдання зберігаються в localStorage після кожного додавання чи видалення.

// Після перезавантаження сторінки список завдань має завантажуватися з localStorage.

// 6. Перемикач теми:

// Додайте можливість перемикати тему (світлу чи темну).

// Збереження вибраної теми у localStorage.
// При перезавантаженні сторінки перевіряти, яка тема була обрана, і застосовувати її.

export function onFormSubmit(e) {
  e.preventDefault();
  const { taskName, taskDescription } = e.target.elements;
  const name = taskName.value.trim();
  const description = taskDescription.value.trim();
  if (!name || !description) {
    alert('не всі поля заповнені');
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
