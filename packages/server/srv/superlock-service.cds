using {ordina.timesheet.superlock.db as superlock} from '../db/superlock';

service superlockService @(path: '/timesheet/superlock') {

    entity EmployeeData as projection on superlock.employeeData;
    
}