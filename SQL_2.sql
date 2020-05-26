-- Вывести список ID отделов, количество сотрудников в которых не превышает 3 человек

SELECT DEPARTMENT_ID 
FROM EMPLOYEE 
GROUP BY DEPARTMENT_ID 
HAVING COUNT(*) <= 3
