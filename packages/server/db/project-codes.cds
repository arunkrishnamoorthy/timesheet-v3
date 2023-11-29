namespace ordina.timesheet.projectcodes.db;

entity PROJECT_CODE {
    key ID: UUID;
        CUSTOMER: String(10);
        PERSON_NUMBER: String(8);
        CUSTOMER_NAME: String(80);
        PROJECT_NAME: String(40);
        PROJECT_DESC: String(80);
        PERSON_NAME: String(80);
        STAND_BY: Boolean;
        STATUS: String(20);
        FIRST_DAY: Date;
        TIME_UUID: UUID;
        WBS_ELEMENT: String;
}

entity CUSTOMERS {
    key Customer: String(10);
        CustomerName: String(80);
}

entity EMPLOYEES {
    key PersonnelNumber: String(8);
        PersonFullName: String(80);
}

entity PROJECTS {
    key ProjectName: String(40);
    ProjectDescription: String(80);
}

entity STAFFING_WBS {
    key PERSON_NUMBER: String(8);
    key START_DATE: Date;
    key WBS_ID:  String(8);
        NAME: String;
        DESCRIPTION: String;
}

entity TimesheetBooking {
    key DummyProjectId : UUID;
    key DummyProjectTimeId: UUID;
    key PersonnelNumber: String(8);
        WBSCode: String;
        TimeSheetNote: String;
        RecordedHours: Decimal(3,2);
        RecordedQuantity: Decimal(3,2);
        TimeSheetDate: Date;
}
