// Filters Reducer
const filtersReducerDefaultState = {
  sortBy: 'name',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      };
    case 'SORT_BY_TITLE':
      return {
        ...state,
        sortBy: 'title'
      };
    default:
      return state;
  }
};
