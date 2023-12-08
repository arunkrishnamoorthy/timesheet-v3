using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with @(
    Capabilities.DeleteRestrictions: {
        Deletable: false
    },
    Capabilities.FilterRestrictions: {
        FilterExpressionRestrictions : [
            {
                $Type : 'Capabilities.FilterExpressionRestrictionType',
                AllowedExpressions: 'SingleRange',
                Property: 'EndDate'
            },
            {
                $Type : 'Capabilities.FilterExpressionRestrictionType',
                AllowedExpressions: 'SingleRange',
                Property: 'EmployeeType'
            }
        ],
    }
);
