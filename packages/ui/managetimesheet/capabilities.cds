using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with @(
    Capabilities.DeleteRestrictions: {
        Deletable: false
    }
);
