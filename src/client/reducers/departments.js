const departmentsDefaultState = {
  isFetching: false,
  error: null,
  departments: []
};

const departmentsReducer = (state=departmentsDefaultState, action) => {
  switch (action.type) {
    case "FETCH_DEPARTMENTS": {
      return {...state, isFetching: true}
    }
    case "FETCH_DEPARTMENTS_REJECTED": {
      return {...state, isFetching: false, error: action.payload}
    }
    case "FETCH_DEPARTMENTS_FULFILLED": {
      return {
        ...state,
        isFetching: false,
        departments: action.payload,
      }
    }
  }
  return state
}
export default departmentsReducer;