import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import departmentsReducer from '../reducers/departments';
import employeesReducer from '../reducers/employees';
import titlesReducer from '../reducers/jobTitles';
import paginationReducer from '../reducers/pagination';
import filtersReducer from '../reducers/filters';

const middleware = applyMiddleware(thunk, createLogger())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      departments: departmentsReducer,
      employees: employeesReducer,
      titles: titlesReducer,
      pagination: paginationReducer,
      filters: filtersReducer
    }),    
    composeEnhancers(middleware)
  );
  return store;
};


