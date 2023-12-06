using {ordina.timesheet.superlock.db as superlock} from '../db/superlock';

service superlockService @(path: '/timesheet/superlock') {

    @cds.query.limit: 100
    entity EmployeeData as projection on superlock.employeeData;
    
}