using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with @(
    UI.SelectionFields: [
        PersonnelNumber,
        EmployeeType,
        Unit,
        LockStatus,
    ]
);

annotate service.EmployeeData with @(
    UI.HeaderInfo: {
        TypeName: 'Employees',
        TypeNamePlural: 'Employees'
    },
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'PersonnelNumber',
            Value : PersonnelNumber,
            ![@UI.Importance]: #High
        },
        {
            $Type : 'UI.DataField',
            Label : 'PersonFullName',
            Value : PersonFullName,
            ![@UI.Importance]: #High
        },
        {
            $Type : 'UI.DataField',
            Label : 'PersonExternalID',
            Value : PersonExternalID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'CompanyCode',
            Value : CompanyCode,
            ![@UI.Importance]: #High
        },
        {
            $Type : 'UI.DataField',
            Label : 'BusinessPartnerRole',
            Value : BusinessPartnerRole,
        },
        {
            $Type : 'UI.DataField',
            Label : 'EmployeeType',
            Value : EmployeeType,
            ![@UI.Importance]: #High
        },
        {
            $Type : 'UI.DataField',
            Label : 'Reason',
            Value : Reason,
            ![@UI.Importance]: #High
        },
        {
            $Type : 'UI.DataField',
            Label : 'Unit',
            Value : Unit,
            ![@UI.Importance]: #High
        },
        {
            $Type : 'UI.DataField',
            Label : 'LockStatus',
            Value : LockStatus,
            ![@UI.Importance]: #High
        },
    ]
);
annotate service.EmployeeData with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'PersonnelNumber',
                Value : PersonnelNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PersonFullName',
                Value : PersonFullName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PersonExternalID',
                Value : PersonExternalID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CompanyCode',
                Value : CompanyCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'BusinessPartnerRole',
                Value : BusinessPartnerRole,
            },
            {
                $Type : 'UI.DataField',
                Label : 'BusinessPartnerRoleShortName',
                Value : BusinessPartnerRoleShortName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'AvailabilityInHours',
                Value : AvailabilityInHours,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CostCenter',
                Value : CostCenter,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CostCenterName',
                Value : CostCenterName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EndDate',
                Value : EndDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Country',
                Value : Country,
            },
            {
                $Type : 'UI.DataField',
                Label : 'LockStatus',
                Value : LockStatus,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Reason',
                Value : Reason,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Unit',
                Value : Unit,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EmployeeType',
                Value : EmployeeType,
            },
            {
                $Type : 'UI.DataField',
                Label : 'HoursExternal',
                Value : HoursExternal,
            },
            {
                $Type : 'UI.DataField',
                Label : 'HoursInternal',
                Value : HoursInternal,
            },
            {
                $Type : 'UI.DataField',
                Label : 'HoursDecimal',
                Value : HoursDecimal,
            },
            {
                $Type : 'UI.DataField',
                Label : 'HoursMinutes',
                Value : HoursMinutes,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);


