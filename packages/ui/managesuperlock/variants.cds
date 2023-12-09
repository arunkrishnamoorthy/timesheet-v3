using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with @(
    UI.SelectionVariant#superlocksvBelgium: {
        Text: 'Belgium',
        SelectOptions: [
            {
                PropertyName: 'Country',
                Ranges: [
                    {
                        Sign : #I,
                        Option: #EQ,
                        Low: 'BE'
                    }
                ]
            }
        ]
    },
    UI.SelectionVariant#superlocksvNetherlands: {
        Text: 'Netherlands',
        SelectOptions: [
            {
                PropertyName: 'Country',
                Ranges: [
                    {
                        Sign: #I,
                        Option: #EQ,
                        Low: 'NL'
                    }
                ]
            }
        ]
    },
    UI.SelectionVariant#superlocksvLuxemberg: {
        Text: 'Luxemberg',
        SelectOptions: [
            {
                PropertyName: 'Country',
                Ranges: [
                    {
                        Sign : #I,
                        Option: #EQ,
                        Low: 'LU'
                    }
                ]
            }
        ]
    }
);