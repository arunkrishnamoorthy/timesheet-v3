using ProjectCodes as service from '../../server/srv/projectcode-service';

annotate service.ProjectCodes with {
    CUSTOMER @title : '{@i18n>customer}';
    CUSTOMER_NAME @title : '{@i18n>customerName}';
    FIRST_DAY @title : '{@i18n>firstDay}';
    ID @title : '{@i18n>ProjectCodeID}';
    PERSON_NAME @title : '{@i18n>personName}';
    PERSON_NUMBER @title : '{@i18n>personNumber}';
    PROJECT_DESC @title : '{@i18n>projectDesc}';
    PROJECT_NAME @title : '{@i18n>projectName}';
    STAND_BY @title: '{@i18n>StandBy}';
    STATUS @title : '{@i18n>status}';
    TIME_UUID @title : '{@i18n>TimeUUID}';
    WBS_ELEMENT @title : '{@i18n>WbsElement}';
};
