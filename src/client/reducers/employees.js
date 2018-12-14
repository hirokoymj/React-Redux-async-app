const employeesDefaultState = {
  isFetching: false,
  error: null,
  employees: [],
  employeesAll:[]
};

const employeesReducer = (state=employeesDefaultState, action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES": {
      return {...state, isFetching: true}
    }
    case "FETCH_EMPLOYEES_REJECTED": {
      return {...state, isFetching: false, error: action.payload}
    }
    case "FETCH_EMPLOYEES_FULFILLED": {
      return {
        ...state,
        isFetching: false,
        employees: action.payload,
      }
    }
    case "FETCH_ALLEMPLOYEES": {
      return {...state, isFetching: true}
    }
    case "FETCH_ALLEMPLOYEES_REJECTED": {
      return {...state, isFetching: false, error: action.payload}
    }
    case "FETCH_ALLEMPLOYEES_FULFILLED": {
      return {
        ...state,
        isFetching: false,
        employeesAll: action.payload,
      }
    }         
    case "DELETE_EMPLOYEE": {
      return {...state, isFetching: true}
    }
    case "DELETE_EMPLOYEE_REJECTED": {
      return {...state, isFetching: false, error: action.payload}
    }
    case "DELETE_EMPLOYEE_FULFILLED": {
      return {
        ...state,
        isFetching: false,
        employees: state.employees.filter(({ id }) => id !== action.payload.id),
      }
    }
    case "CREATE_EMPLOYEE": {
      return {...state, isFetching: true}
    }
    case "CREATE_EMPLOYEE_REJECTED": {
      return {...state, isFetching: false, error: action.payload}
    }
    case "CREATE_EMPLOYEE_FULFILLED": {
      return {
        ...state,
        isFetching: false,
        employees: [...state.employees, action.payload],
      }
    }
    case "EDIT_EMPLOYEE": {
      return {...state, isFetching: true}
    }
    case "EDIT_EMPLOYEE_REJECTED": {
      return {...state, isFetching: false, error: action.payload}
    }
    case "EDIT_EMPLOYEE_FULFILLED": {
      const updatedEmployees = state.employees.map((employee)=>{
        if(employee.id === action.id){
          return {
            ...employee,
            ...action.updates
          };
        }else{
          return employee;
        }
      })
      return {
        ...state,
        // Override rest of properties to update.
        isFetching: false,
        employees: updatedEmployees
      }
    }    
  }
  return state
}
export default employeesReducer;