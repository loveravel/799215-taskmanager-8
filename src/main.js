import makeFilter from '../src/modules/make-filter.js';
import makeTask from '../src/modules/make-task';

/* Функция для генерирования случайного числа от min до max */
const getRandomInteger = (minimumNumber, maximumNumber) => {
  let randomNumber = minimumNumber + Math.random() * (maximumNumber - minimumNumber + 1);
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

/* Отрисовка фильтров */
const filtersContainer = document.querySelector(`.main__filter`);
const FILTER_NAMES = [
  `all`,
  `overdue`,
  `today`,
  `favorites`,
  `repeating`,
  `tags`,
  `archive`,
];

const renderFilters = () => {
  FILTER_NAMES.forEach((it) => {
    const filter = makeFilter(it, getRandomInteger(0, 100));
    filtersContainer.insertAdjacentHTML(`beforeend`, filter);
  });
};

renderFilters();

/* Отрисовка задач */
const tasksContainer = document.querySelector(`.board__tasks`);
const TASK_COLORS = [
  `black`,
  `pink`,
  `yellow`,
  `blue`,
];

const renderTasks = (amountTasks = 7) => {
  for (let i = 0; i < amountTasks; i++) {
    const taskElement = makeTask(TASK_COLORS[getRandomInteger(0, TASK_COLORS.length - 1)]);
    tasksContainer.appendChild(taskElement);
  }
};

renderTasks();

/* Обработка события клика по фильтру */
const filterElements = document.querySelectorAll(`.filter__input`);
filterElements.forEach((it) => {
  it.addEventListener(`click`, () => {
    tasksContainer.innerHTML = ``;
    renderTasks(getRandomInteger(1, 10));
  });
});
