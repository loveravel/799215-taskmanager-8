'use strict';

/* Функция для генерирования случайного числа от min до max */
const getRandomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

/* Отрисовка фильтров */
const filtersContainer = document.querySelector(`.main__filter`);
const FILTERS = [
  `all`,
  `overdue`,
  `today`,
  `favorites`,
  `repeating`,
  `tags`,
  `archive`,
];

const renderFilter = () => {
  let filtersHTML = ``;
  FILTERS.forEach((it) => {
    let itLowerCase = it.toLowerCase();
    let filterID = `filter__` + itLowerCase;
    let amountTasks = getRandomInteger(0, 100);
    filtersHTML += `<input
      type="radio"
      id="${filterID}"
      class="filter__input visually-hidden"
      name="filter"
      ${itLowerCase === `all` ? `checked` : ``}
      ${amountTasks ? `` : `disabled`}
    />
    <label for="${filterID}" class="filter__label">
      ${itLowerCase} <span class="filter__all-count">${amountTasks}</span></label
    >`;
  });
  filtersContainer.innerHTML = filtersHTML;
};

renderFilter();
