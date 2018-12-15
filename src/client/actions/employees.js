import axios from "axios";

// export const fetchEmployees = (page=1) => {
//   return function(dispatch) {
//     dispatch({type: "FETCH_EMPLOYEES"});
//     axios.get(`/api/employees?page=${page}`)
//       .then((response) => {
//         dispatch({type: "FETCH_EMPLOYEES_FULFILLED", payload: response.data})
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_EMPLOYEES_REJECTED", payload: err})
//       })
//   }
// }

// 
// store.dispatch(fetchEmployees())
// store.dispatch(fetchEmployees()).then(()=>{console.log('action chain!! works')})
//
export const fetchEmployees = (page=1) => {
  return function(dispatch) {
    dispatch({type: "FETCH_EMPLOYEES"});
    return axios.get(`/api/employees?page=${page}`).then(
      (response) => {
        dispatch({type: "FETCH_EMPLOYEES_FULFILLED", payload: response.data})
      },
      (error)=>{
        dispatch({type: "FETCH_EMPLOYEES_REJECTED", payload: error})
        throw error
      })
  }
}

export const fetchAllEmployees = () => {
  return function(dispatch) {
    dispatch({type: "FETCH_ALLEMPLOYEES"});
    return axios.get(`/api/employees?page=all`).then(
      (response) => {
        dispatch({type: "FETCH_ALLEMPLOYEES_FULFILLED", payload: response.data})
      },
      (error)=>{
        dispatch({type: "FETCH_ALLEMPLOYEES_REJECTED", payload: error})
        throw error
      })
  }
}

export const deleteEmployee = (id) => {
  return function(dispatch) {
    dispatch({type: "DELETE_EMPLOYEE"});
    console.log(`/api/employees/${id}`);
    axios.delete(`/api/employees/${id}`)
      .then((response) => {
        dispatch({type: "DELETE_EMPLOYEE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "DELETE_EMPLOYEE_REJECTED", payload: err})
      })
  }
}

export const createEmployee = (employeeData={}) => {
  return (dispatch) => {
    const {
      name = '',
      department = '',
      employee_annual_salary = 0,
      job_titles = ''
    } = employeeData;

    dispatch({type: "CREATE_EMPLOYEE"});
    axios.post('/api/employees', employeeData)
      .then((response) => {
        dispatch({type: "CREATE_EMPLOYEE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "CREATE_EMPLOYEE_REJECTED", payload: err})
      })
  }
}


export const editEmployee = (id, updates) => {
  return (dispatch) => {
    dispatch({type: "EDIT_EMPLOYEE"});
    axios.put(`/api/employees/${id}`, updates)
      .then((response) => {
        dispatch({type: "EDIT_EMPLOYEE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "EDIT_EMPLOYEE_REJECTED", payload: err})
      })
  }
}


