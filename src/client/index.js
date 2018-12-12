import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
// Action generators
//import { addUser } from './actions/users';
import './styles/style.scss';

const store = configureStore();

// const userOne = store.dispatch(addUser({ firstname: 'Jen', lastname: 'Smith', email: 'jen@gmail.com' }));
// const userTwo = store.dispatch(addUser({ firstname: 'Hiroko', lastname: 'Yamaji', email:'hiroko@test.com' }));
// const userThree = store.dispatch(addUser({ firstname: 'Grace', lastname: 'Brown', email:'hiroko@test.com' }));

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

