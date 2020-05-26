-- Найти список ID отделов с максимальной суммарной зарплатой сотрудников

WITH SUM_SALARY AS ( SELECT DEPARTMENT_ID, SUM(SALARY) SALARY 
                     FROM EMPLOYEE 
                     GROUP BY DEPARTMENT_ID ) 
SELECT DEPARTMENT_ID 
FROM SUM_SALARY a 
WHERE a.SALARY = ( SELECT MAX(SALARY) 
                   FROM SUM_SALARY )
