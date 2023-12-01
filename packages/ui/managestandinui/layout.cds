using s4cloud as service from '../../server/srv/s4-service';

annotate service.YY1_DUMMYPROJECT with @(
    UI.SelectionFields: [
        Customer,
        PersonnelNumber,
        ProjectName
    ]
);

annotate service.YY1_DUMMYPROJECT with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataFieldWithIntentBasedNavigation',
            Value : PersonnelNumber,
            ![@UI.Importance] : #High,
            SemanticObject : 'Test',
            Action: 'action'
        },
        {
            $Type : 'UI.DataField',
            Value : Customer,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : ProjectName,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : PersonFullName,
        },
        {
            $Type : 'UI.DataField',
            Value : CustomerName,
        },
         {
            $Type : 'UI.DataField',
            Value : StandByAllowed,
        },
    ]
);

annotate service.YY1_DUMMYPROJECT with @(
    UI.HeaderInfo : {
        TypeName : 'Stand-In Project',
        TypeNamePlural : 'Stand-In Projects',
        Title : {
            $Type : 'UI.DataField',
            Value : ProjectName
        },
        Description : {
            $Type : 'UI.DataField',
            Value : ProjectDescription
        }
    },
    UI.FieldGroup#General: {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : PersonnelNumber,
            },
            {
                $Type : 'UI.DataField',
                Value : Customer,
            },
            {
                $Type : 'UI.DataField',
                Value : ProjectName,
            },
            {
                $Type : 'UI.DataField',
                Value : PersonFullName,
            },
            {
                $Type : 'UI.DataField',
                Value : CustomerName,
            },
            {
                $Type : 'UI.DataField',
                Value : ProjectDescription,
            },
            {
                $Type : 'UI.DataField',
                Value : StandByAllowed,
            },
            {
                $Type : 'UI.DataField',
                Value : DummyProjectStatus,
            },
        ],
    },
    UI.FieldGroup#Administration: {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'SAP_CreatedDateTime',
                Value : SAP_CreatedDateTime,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP_CreatedByUser',
                Value : SAP_CreatedByUser,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP_CreatedByUser_Text',
                Value : SAP_CreatedByUser_Text,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP_LastChangedDateTime',
                Value : SAP_LastChangedDateTime,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP_LastChangedByUser',
                Value : SAP_LastChangedByUser,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP_LastChangedByUser_Text',
                Value : SAP_LastChangedByUser_Text,
            },
        ]
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#General',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet2',
            Label : 'Admin Data',
            Target : '@UI.FieldGroup#Administration',
        }
    ]
);
