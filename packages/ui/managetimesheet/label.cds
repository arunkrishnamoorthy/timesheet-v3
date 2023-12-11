using superlockService as service from '../../server/srv/superlock-service';

annotate service.EmployeeData with {
    AvailabilityInHours @title : '{@i18n>AvailabilityInHours}';
    BusinessPartner @title : '{@i18n>BusinessPartner}';
    BusinessPartnerRole @title : '{@i18n>BusinessPartnerRole}';
    BusinessPartnerRoleShortName @title : '{@i18n>BusinessPartnerRoleShortName}';
    CompanyCode @title : '{@i18n>CompanyCode}';
    CostCenter @title: '{@i18n>CostCenter}';
    CostCenterName @title : '{@i18n>CostCenterName}';
    Country @title : '{@i18n>Country}';
    CountryName @title: '{@i18n>CountryName}';
    EmployeeType @title: '{@i18n>EmployeeType}';
    EndDate @title : '{@i18n>Period}';
    HoursDecimal @title : '{@i18n>HoursInDecimal}';
    HoursExternal @title : '{@i18n>HoursExternal}';
    HoursInternal @title : '{@i18n>HoursInternal}';
    HoursMinutes @title : '{@i18n>HoursInMinutes}';
    LockStatus @title : '{@i18n>LockStatus}';
    PersonExternalID @title : '{@i18n>PersonExternalID}';
    PersonFullName @title : '{@i18n>PersonlFullName}';
    Reason @title : '{@i18n>Reason}';
    Unit @title: '{@i18n>Unit}';  
};
