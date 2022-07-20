SELECT 
    employee_id, first_name, YEAR(hire_date) 'hire_year'
FROM
    hr.employees;