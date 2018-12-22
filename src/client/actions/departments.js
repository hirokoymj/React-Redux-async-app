import axios from "axios";

/**
 * Get all department data for a dropdown menu in EmployeeForm.
 * Calls GET request.
 * @example
 * store.dispatch( fetchDepartments() )
 */
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



