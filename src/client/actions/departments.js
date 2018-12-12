import axios from "axios";

// React-promise-middleware.
// export const fetchDepartments  = () =>({
//   type: "FETCH_DEPARTMENTS",
//   payload: axios.get("/api/departments")
// })

export const fetchDepartments = () => {
  return function(dispatch) {
    dispatch({type: "FETCH_DEPARTMENTS"});
    axios.get("/api/departments")
      .then((response) => {
        dispatch({type: "FETCH_DEPARTMENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_DEPARTMENTS_REJECTED", payload: err})
      })
  }
}



