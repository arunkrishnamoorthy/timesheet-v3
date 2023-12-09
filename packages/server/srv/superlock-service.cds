using {ordina.timesheet.superlock.db as superlock} from '../db/superlock';

service superlockService @(path: '/timesheet/superlock') {

    @cds.query.limit: 100
    entity EmployeeData as projection on superlock.employeeData actions {
        action UnlockToLocked();
        action LockedToSuperlock();
    }
    action LockAll();
    action SuperLockAll();
    action UnlockAll();

    entity Employees as projection on superlock.Employees;
    entity EmployeeTypes as projection on superlock.EmployeeType;
    
}