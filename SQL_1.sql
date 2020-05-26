SELECT a.*
FROM   EMPLOYEE a
WHERE  a.SALARY = ( SELECT MAX(SALARY)
                    FROM EMPLOYEE b
                    WHERE  b.DEPARTMENT_ID = a.DEPARTMENT_ID )
