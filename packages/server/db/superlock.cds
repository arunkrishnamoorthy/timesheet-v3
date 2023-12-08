namespace ordina.timesheet.superlock.db;
using { sap.common.CodeList as CodeList } from '@sap/cds/common';

entity EmployeeType: CodeList {
    key code: String(6);
}

entity Employees {
    key PersonnelNumber : String(20);
        PersonFullName: String(100);
        EmployeeType: String(10);       
        Country: String(2);
}

entity employeeData {
    key PersonnelNumber : String(20);
        PersonFullName: String(100);
        PersonExternalID: String(20);
        CompanyCode: String(10);
        BusinessPartner: String(20);
        BusinessPartnerRole: String(10);
        BusinessPartnerRoleShortName: String;
        AvailabilityInHours: String(5);
        CostCenter: String(10);
        CostCenterName: String(40);
        EndDate: Date;
        Country: String(2);
        CountryName: String(40);
        LockStatus: String(10);
        Reason: String(10);
        Unit: String(10);
        EmployeeType: String(10);
        HoursExternal: String(6);
        HoursInternal: Integer;
        HoursDecimal: Decimal(4,2);
        HoursMinutes: String(5);
}