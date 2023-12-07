using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with {

    Country @Common : { FilterDefaultValue :  'BE' };
    EmployeeType @Common: { FilterDefaultValue : 'I' };

    PersonnelNumber @(
        Common: {
            Text: PersonFullName,
            TextArrangement : #TextSeparate,
            ValueList : {
                $Type : 'Common.ValueListType',
                CollectionPath : 'Employees',
                SelectionVariantQualifier : 'Belgium',
                Parameters: [
                    {
                        $Type : 'Common.ValueListParameterIn',
                        ValueListProperty : 'Country',
                        LocalDataProperty: Country
                    },
                    {
                        $Type : 'Common.ValueListParameterIn',
                        ValueListProperty : 'EmployeeType',
                        LocalDataProperty: EmployeeType
                    },
                    {
                        $Type : 'Common.ValueListParameterInOut',
                        LocalDataProperty : PersonnelNumber,
                        ValueListProperty : 'PersonnelNumber',
                    },
                    {
                        $Type : 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty : 'PersonFullName',
                    }
                ]
            },
        }
    );

}