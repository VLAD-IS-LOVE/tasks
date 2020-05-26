-- Вывести список сотрудников, получающих максимальную заработную плату в своем отделе

SELECT a.*
FROM   EMPLOYEE a
WHERE  a.SALARY = ( SELECT MAX(SALARY)
                    FROM EMPLOYEE b
                    WHERE  b.DEPARTMENT_ID = a.DEPARTMENT_ID )
