import axios from "axios";

export const getTotalDocCount = () => {
  console.log('getTotalCount');
  return (dispatch)=>{
    dispatch({type: "SET_TOTALCOUNT"});
    axios.post("/api/employees/countDocs")
      .then((response) => {
        console.log(response.data);
        dispatch({type: "SET_TOTALCOUNT_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "SET_TOTALCOUNT_REJECTED", payload: err})
      })
  }
}