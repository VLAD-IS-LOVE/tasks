Обновить ID любого отдела так, чтобы “не потерять” работающих в нем сотрудников

UPDATE DEPARTMENT, EMPLOYEE
SET DEPARTMENT.ID = "new_id",
    EMPLOYEE.DEPARTMENT_ID = "new_id"
WHERE DEPARTMENT.ID = EMPLOYEE.DEPARTMENT_ID 
                      AND EMPLOYEE.DEPARTMENT_ID = "old_id"
