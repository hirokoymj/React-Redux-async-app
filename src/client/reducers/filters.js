// Filters Reducer
const filtersReducerDefaultState = {
  sortBy: 'id',
  sortType: false,
  text: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name',
        sortType: action.sortType
      };
    case 'SORT_BY_TITLE':
      return {
        ...state,
        sortBy: 'title',
        sortType: action.sortType
      };
    case 'RESET_FILTERS': 
      return filtersReducerDefaultState;    
    case 'SET_TEXT_FILTER' :
      return {
        ...state,
        text: action.text
      }  
    default:
      return state;
  }
};
