export default (employees, { sortBy }) => {
  console.log('sortBy', sortBy);
  console.log(employees);

  employees.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name < b.name ? 1 : -1;
    } else if (sortBy === 'title') {
      return a.job_titles < b.job_titles ? 1 : -1;
    }
  });
  return employees;
};




