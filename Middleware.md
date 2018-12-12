# Middleware - Redux-thunk

- Redux Thunk middleware allows us to write action creators that return **a function** instead of **an action object**.

## Installation
```js
npm install redux-thunk
```

## Implementation to store
- Import `applyMiddleware` from redux

```js
import { createStore, applyMiddleware} from 'redux';
import usersReducer from '../reducers/users';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    usersReducer,
    applyMiddleware(thunk)
  );
  return store;
};
```

- https://github.com/reduxjs/redux-thunk