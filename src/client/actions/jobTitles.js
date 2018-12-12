import axios from "axios";

// React-promise-middleware.
// export const fetchDepartments  = () =>({
//   type: "FETCH_DEPARTMENTS",
//   payload: axios.get("/api/departments")
// })

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




