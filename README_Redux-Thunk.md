# Redux Middleware

- [Redux-thunk](https://github.com/reduxjs/redux-thunk)
>Redux Thunk middleware allows you to write action creators that return a function instead of an action.

- [Redux-logger](https://github.com/LogRocket/redux-logger#readme)
>![](/public/images/redux-logger2.png)
- [Redux Promise Middleware](https://www.npmjs.com/package/redux-promise-middleware)
>Promise middleware will notice that you dispatched a payload that is a promise type and it will automatically send throught some default dispatch. 
- FETCH_USERS_PENDING
- FETCH_USERS_FULFILLED
- FETCH_USERS_REJECTED

```js
store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})
```

### Redux Async Actions

```js
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
      break;
    }
  }
  return state
}

const middleware = applyMiddleware(promise(), thunk, logger())
const store = createStore(reducer, middleware)

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})
```

![redux-logger screenshot](redux-logger.png)


# Connecting React & Redux 


### References:
- [Redux Middleware Tutorial - Redux Tutorial #5](https://www.youtube.com/watch?v=DJ8fR0mZM44)
- [Redux Async Actions - Redux Tutorial #6](https://www.youtube.com/watch?v=Td-2D-_7Y2E&t=338s)


