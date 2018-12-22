import axios from "axios";

/**
 * Get employee data per page. The page has 100 records as default.
 * Calls GET request.
 * @param {string} page - a page number
 * @example
 * store.dispatch(fetchEmployees(5))
 * store.dispatch(fetchEmployees(5)).then((=>{console.log('Success!')}))
 */
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

/**
 * Get all employee data.
 * Calls GET request.
 * @example
 * store.dispatch( fetchAllEmployees() )
 */
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

/**
 * Delete an employee data.
 * Calls DELETE request.
 * @param {number} id - Employee Id
 * @example
 * store.dispatch( deleteEmployee(10) )
 */
export const deleteEmployee = (id) => {
  return function(dispatch) {
    dispatch({type: "DELETE_EMPLOYEE"});
    axios.delete(`/api/employees/${id}`)
      .then((response) => {
        dispatch({type: "DELETE_EMPLOYEE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "DELETE_EMPLOYEE_REJECTED", payload: err})
      })
  }
}

/**
 * Add an employee.
 * Calls POST request.
 * @param {object} employeeData - new employee data
 * @example
 * store.dispatch( createEmployee(formData) )
 * store.dispatch( createEmployee(formData) ).then(()=>{console.log('Saved!')})
 */
export const createEmployee = (employeeData={}) => {
  return (dispatch) => {
    const {
      name = '',
      department = '',
      employee_annual_salary = 0,
      job_titles = ''
    } = employeeData;

    dispatch({type: "CREATE_EMPLOYEE"});
    return axios.post('/api/employees', employeeData)
      .then((response) => {
        dispatch({type: "CREATE_EMPLOYEE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "CREATE_EMPLOYEE_REJECTED", payload: err})
      })
  }
}

/**
 * Edit an employee.
 * Calls PUT request.
 * @param {number} id - Employee Id
 * @param {object} updates - update employee data from form
 * @example
 * store.dispatch( editEmployee(10, {name: "John Smith"}) )
 * store.dispatch( editEmployee(10, {name: "John Smith"}) ).then(()=>{console.log('Edit!')})
 */
export const editEmployee = (id, updates) => {
  return function(dispatch){
    dispatch({type: "EDIT_EMPLOYEE"});
    return axios.put(`/api/employees/${id}`, updates)
      .then((response) => {
        dispatch({
          type: "EDIT_EMPLOYEE_FULFILLED",
          payload: {
            id,
            updates: response.data
          }
        })
      })
      .catch((err) => {
        dispatch({type: "EDIT_EMPLOYEE_REJECTED", payload: err})
      })
  }
}


