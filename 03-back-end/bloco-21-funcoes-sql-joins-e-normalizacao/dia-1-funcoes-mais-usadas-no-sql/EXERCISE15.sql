SELECT 
    employee_id, first_name, MONTH(hire_date) 'hire_month'
FROM
    hr.employees;