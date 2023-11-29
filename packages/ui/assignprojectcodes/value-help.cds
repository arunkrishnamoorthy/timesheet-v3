using ProjectCodes as service from '../../server/srv/projectcode-service';

annotate service.ProjectCodes with {

    /** Customer */
    CUSTOMER @(
        Common : {
            Text : CUSTOMER_NAME,
            TextArrangement : #TextFirst,
            ValueList : {
                $Type : 'Common.ValueListType',
                CollectionPath : 'Customers',
                Parameters : [
                    {
                        $Type : 'Common.ValueListParameterInOut',
                        LocalDataProperty : 'CUSTOMER',
                        ValueListProperty : 'Customer',
                    },
                    {
                        $Type : 'Common.ValueListParameterOut',
                        LocalDataProperty : 'CUSTOMER_NAME',
                        ValueListProperty : 'CustomerName',
                    }
                ],
            },
        }
    );

    /** Projects */
    PROJECT_NAME @(
        Common: {
            Text: PROJECT_DESC,
            TextArrangement : #TextSeparate,
            ValueList : {
                $Type : 'Common.ValueListType',
                CollectionPath : 'Projects',
                Parameters : [
                    {
                        $Type : 'Common.ValueListParameterInOut',
                        LocalDataProperty : PROJECT_NAME,
                        ValueListProperty : 'ProjectName',
                    },
                    { 
                        $Type : 'Common.ValueListParameterOut',
                        LocalDataProperty : PROJECT_DESC,
                        ValueListProperty : 'ProjectDescription',
                    }
                ],
            },
        }
    );

    /** Personnel Number */
    PERSON_NUMBER @(
        Common: {
            Text : PERSON_NAME,
            TextArrangement : #TextSeparate,
            ValueList : {
                $Type : 'Common.ValueListType',
                CollectionPath : 'Employees',
                Parameters : [
                    {
                        $Type : 'Common.ValueListParameterInOut',
                        LocalDataProperty : 'PERSON_NUMBER',
                        ValueListProperty : 'PersonnelNumber',
                    },
                    {
                        $Type : 'Common.ValueListParameterOut',
                        LocalDataProperty : 'PERSON_NAME',
                        ValueListProperty : 'PersonFullName',
                    }
                ],
            },
        }
    )
}

annotate service.Customers with {
    Customer @Common : { Text: CustomerName, TextArrangement : #TextSeparate }
};

