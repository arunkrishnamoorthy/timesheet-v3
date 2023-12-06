using ProjectCodes as service from '../../server/srv/projectcode-service';

annotate service.YY1_PROJECTSTAFFING_2 with @(
    UI.SelectionVariant#StartDate: {
        Text: 'Selection Variant',
        SelectOptions: [
            {
                PropertyName: 'StartDate',
                Ranges: [
                    {
                        Sign : #I,
                        Option: #GT,
                        Low: '20230101'
                    }
                ]
            }
        ]
    }
);
