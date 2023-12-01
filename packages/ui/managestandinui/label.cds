using s4cloud as service from '../../server/srv/s4-service';

annotate service.YY1_DUMMYPROJECT with {
    Customer @title: '{@i18n>customer}';
    CustomerName @title : '{@i18n>customerName}';
    DummyProjectStatus @title : '{@i18n>projectStatus}';
    PersonFullName @title : '{@i18n>personFullName}';
    PersonnelNumber @title : '{@i18n>personalNumber}';
    ProjectDescription @title : '{@i18n>projectDesc}';
    ProjectName @title: '{@i18n>projectName}';
    StandByAllowed @title : '{@i18n>standby}';
    SAP_CreatedByUser @title : '{@i18n>createdBy}';
    SAP_CreatedByUser_Text @title : '{@i18n>createdByName}';
    SAP_CreatedDateTime @title : '{@i18n>createdAt}';
    SAP_LastChangedByUser @title : '{@i18n>changedBy}';
    SAP_LastChangedByUser_Text @title: '{@i18n>changedByName}';
    SAP_LastChangedDateTime @title : '{@i18n>changedAt}';
};
