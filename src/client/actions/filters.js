
export const sortByName = (sortType) => ({
  type: 'SORT_BY_NAME',
  sortType
});

export const sortByTitle = (sortType) => ({
  type: 'SORT_BY_TITLE',
  sortType
});

export const resetFilters = () => ({
  type: 'RESET_FILTERS',
});

export const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
});

