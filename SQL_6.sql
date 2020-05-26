-- Удалить отдел и всех сотрудников, привязанных к этому отделу

DELETE d, e 
FROM DEPARTMENT d
INNER JOIN EMPLOYEE e
WHERE d.ID = e.DEPARTMENT_ID
