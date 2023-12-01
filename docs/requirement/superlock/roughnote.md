# Superlock

Input parameters: 
Year Month: 
Status 
Company Code 1 
Company Code 2 
Country NL 

Need a date utility class to get the first date and last date of the month based on the year and month. 

From the (YY1_WA_AVAILABILITY_CDS) availability API, get the following: 
1. PersonFullName 
2. PersonExternalID
3. CostCenter 
4. BusinessPartnerRole 
5. AvailabilityInHours 
6. YearMonth
7. PersonWorkAgreement_1
8. CompanyCode 
9. CostCenterName 
10. StartDate
11. EndDate 
12. BusinessPartnerRoleShortName 

API: YY1_WA_AVAILABILITY_CDS (1322)
1. Company Code (9034)
2. Year Month (202312)
3. StartDate less than last Date (31-12-2023)
4. End Date Greater than start date (01-12-2023)

API: YY1_WA_ACTUAL_TIME_CDS (5)
1. Year Month (202312)
2. Start date less than Last date (31-12-2023)
3. End date greater than start date (2023-12-01) ( date format)

API: YY1_WA_ACTUAL_TIME_CDS(250)
1. YearMonth (202312)
2. StartDate <= last date (2023-12-31)
3. End Date >= start date (2023-12-01)

Same api, same where condition, yet different result set. the first one has selected columns and the second one doesnt. 

API: YY1_TIMESHEETLOCKSTATUS_CDS
1. YEARMONTH(202312)
2. Status ('U')

AvailabilityInHours:'160:00'
BusinessPartnerRole:'BUP003'
BusinessPartnerRoleShortName:'Employee'
CompanyCode:'9034'
CostCenter:'90343000'
CostCenterName:'SAP'
EndDate:'9999-12-31'
LockStatus:'U'
PersonExternalID:'01005787'
PersonFullName:'Nawfal Oumach'

https://jsoneditoronline.org/#left=cloud.ba5ee8b7824e438094b8c51529d54900&right=local.locowa

