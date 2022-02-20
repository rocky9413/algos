/*
Hacker Rank MySQL Employees by department excercise
Write a query to print the respective Department Name and total of employees per department for all departments in Department table
Include departments with 0 employees.
Order the results per total of employees, if 2 or more departments have the same amount of employees then order alphabetically by department name
*/

// SELECT DEPARTMENT.NAME, COUNT(EMPLOYEE.ID) AS COUNT_OF_EMPLOYEES_IN_THE_DEPARTMENT
//     FROM DEPARMENT
//     LEFT JOIN EMPLOYEE ON DEPARTMENT.ID = EMPLOYEE.DEPT_ID
//     GROUP BY DEPARTMENT.NAME
//     ORDER BY COUNT_OF_EMPLOYEES_IN_THE_DEPARTMENT DESC, DEPARTMENT.NAME ASC
