using ProjectCodes as service from '../../server/srv/projectcode-service';

annotate service.ProjectCodes with @UI : { 
    SelectionFields  : [
        CUSTOMER,
        PERSON_NUMBER,
        PROJECT_NAME
    ],
     HeaderInfo : {
        TypeName : 'Assign Project Codes',
        TypeNamePlural : 'Assign Project Codes',
        Title : {
            $Type : 'UI.DataField',
            Value : PROJECT_NAME
        },
        Description : {
            $Type : 'UI.DataField',
            Value : PROJECT_DESC
        }
    },
    LineItem  : [
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'ProjectCodes.CopyAssignment',
            Label : 'Copy Assignment'
        },
        {
            $Type : 'UI.DataFieldWithIntentBasedNavigation',
            Value : PERSON_NUMBER,
            ![@UI.Importance] : #High,
            SemanticObject : 'Test',
            Action: 'action'
        },
        {
            $Type : 'UI.DataField',
            Value : PERSON_NAME,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : PROJECT_NAME,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : PROJECT_DESC,
        },
        {
            $Type : 'UI.DataField',
            Value : CUSTOMER_NAME,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : STAND_BY,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : FIRST_DAY,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : STATUS,
        }
    ],
 };

 annotate ProjectCodes.YY1_PROJECTSTAFFING_2 with @(
    UI.PresentationVariant #WbsSortOrder:  {
         SortOrder      : [{Property : WorkPackageName, Descending: true },{Property : WBSElementInternalID, Descending: true }]
    }
 );
 