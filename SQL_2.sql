SELECT DEPARTMENT_ID 
FROM EMPLOYEE 
GROUP BY DEPARTMENT_ID 
HAVING COUNT(*) <= 3