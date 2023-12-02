using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with @(
    UI.SelectionVariant#Belgium: {
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
    UI.SelectionVariant#Netherlands: {
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
    UI.SelectionVariant#Luxemberg: {
        Text: 'Luxemberg',
        SelectOptions: [
            {
                PropertyName: 'Country',
                Ranges: [
                    {
                        Sign : #I,
                        Option: #EQ,
                        Low: 'LX'
                    }
                ]
            }
        ]
    },
);

// annotate service.EmployeeData with @(
//     UI.SelectionPresentationVariant#Belgium: {
//         Text: 'Belgium',
//         SelectionVariant: {
//             $Type : 'UI.SelectionVariantType',
//             SelectOptions: [
//                 {
//                     PropertyName: 'Country',
//                     Ranges: [
//                         {
//                             Sign: #I,
//                             Option: #EQ,
//                             Low: 'BE'
//                         }
//                     ]
//                 }
//             ]
//         },
//         PresentationVariant: {
//             SortOrder: [
//                 {
//                     Property: 'Country',
//                     Descending: false
//                 }
//             ]
//         }
//     },
//     UI.SelectionPresentationVariant#Netherlands: {
//         Text: 'Netherlands',
//         SelectionVariant: {
//             $Type : 'UI.SelectionVariantType',
//             SelectOptions: [
//                 {
//                     PropertyName: 'Country',
//                     Ranges: [
//                         {
//                             Sign: #I,
//                             Option: #EQ,
//                             Low: 'NL'
//                         }
//                     ]
//                 }
//             ]
//         },
//         PresentationVariant: {
//             SortOrder: [
//                 {
//                     Property: 'Country',
//                     Descending: false
//                 }
//             ]
//         }
//     }
// );