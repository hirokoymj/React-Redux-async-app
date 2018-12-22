import axios from "axios";

/**
 * Get all job title data for a dropdown menu in EmployeeForm.
 * Calls GET request.
 * @example
 * store.dispatch( fetchJobTitles() )
 */
export const fetchJobTitles = () => {
  console.log('fetchJobTitles');
  return (dispatch)=>{
    dispatch({type: "FETCH_TITLES"});
    axios.get("/api/titles")
      .then((response) => {
        dispatch({type: "FETCH_TITLES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TITLES_REJECTED", payload: err})
      })
  }
}




