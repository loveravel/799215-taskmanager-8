export default (filterName, amountTasks) => {
  const filterNameLowerCase = filterName.toLowerCase();
  const filterID = `filter__` + filterNameLowerCase;
  return (`<input
      type="radio"
      id="${filterID}"
      class="filter__input visually-hidden"
      name="filter"
      ${filterNameLowerCase === `all` ? `checked` : ``}
      ${amountTasks ? `` : `disabled`}
    />
    <label for="${filterID}" class="filter__label">
      ${filterNameLowerCase} <span class="filter__all-count">${amountTasks}</span></label
    >`);
};
