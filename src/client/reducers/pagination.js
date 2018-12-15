const defaultPaginationState = {
  isFetching: false,
  error: null,
  totalCount: 0
}
const paginationReducer = (state=defaultPaginationState, action) =>{
  switch (action.type){
    case 'SET_TOTALCOUNT':{
      return {...state, isFetching: true}
    }
    case 'SET_TOTALCOUNT_REJECTED':{
      return {...state, isFetching: false, error: action.payload}
    }
    case 'SET_TOTALCOUNT_FULFILLED':{
      return {...state, isFetching: false, totalCount: action.payload.count}
    }
  }
  return state;
}
export default paginationReducer;