namespace ordina.timesheet.superlock.db;

entity employeeData {
    key PersonnelNumber : String;
        PersonFullName: String;
        PersonExternalID: String;
        CompanyCode: String;
        BusinessPartnerRole: String;
        BusinessPartnerRoleShortName: String;
        AvailabilityInHours: String;
        CostCenter: String;
        CostCenterName: String;
        EndDate: Date;
        Country: String;
        LockStatus: String;
        Reason: String;
        Unit: String;
        EmployeeType: String;
        HoursExternal: String;
        HoursInternal: String;
        HoursDecimal: String;
        HoursMinutes: String;
}