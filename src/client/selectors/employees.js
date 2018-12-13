export default (employees, { sortBy, sortType, text }) => {

  const filteredEmployees = employees.filter((employee) => {
    const textMatch = employee.department.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });

  if(sortBy === 'name'){
    if (sortType){
      return filteredEmployees.sort((a, b) => a.name<b.name ? -1 : 1);
    }else{
      return filteredEmployees.sort((a, b) => a.name<b.name ? 1 : -1);
    }
  }else if(sortBy === 'title'){
    if (sortType){
      return filteredEmployees.sort((a, b) => a.job_titles<b.job_titles ? -1 : 1);
    }else{
      return filteredEmployees.sort((a, b) => a.job_titles<b.job_titles ? 1 : -1);
    }
  }else if(sortBy === 'id'){
    return filteredEmployees.sort((a, b) => a.id<b.id ? -1 : 1);
  }

  return filteredEmployees;
};




