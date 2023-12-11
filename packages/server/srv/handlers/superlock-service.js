// const cds = require('@sap/cds');

// const UserFactory = require('../helpers/utils/users');
const FilterParser = require('../helpers/utils/filterParser');
const CompanyCodeFactory = require('../helpers/determinations/companycode');
const { groupBy, aggregateBy } = require('../helpers/utils/objectParser');

const { Yy1_Wa_AvailabilityApi } = require('../lib/YY1_WA_AVAILABILITY_CDS/Yy1_Wa_AvailabilityApi');
const { Yy1_CurrentUserApi2Api } = require('../lib/YY1_CurrentUserAPI2_CDS/Yy1_CurrentUserApi2Api');
const destination = { destinationName: 'S4HC_BTP_DEST' };
const { or, and } = require('@sap-cloud-sdk/odata-v2');

module.exports = async (srv) => {

    /**
     * Initialization
     */
    let companyCode = CompanyCodeFactory.getInstance();

    /**
     * Employee Types Value help 
     */
    srv.on("READ", "EmployeeTypes", async() => {
        let result = [];
        result.push({
            code: '1',
            name: '',
            descr: 'All'
        });
        result.push({
            code: '2',
            name: 'BUP003',
            descr: 'Internal'
        });
        result.push({
            code: '3',
            name: 'BBP005',
            descr: 'External'
        });
        result.$count = result.length;
        return result;
    });

    /**
     * Employees Value Help
     */
    srv.on("READ", "Employees", async (req) => {
        // Possible filters: PersonnelNumber, Country, EmployeeType
        let top = req._queryOptions?.$top || 100;
        let skip = req._queryOptions?.$skip || 0;
        let where = req.query.SELECT.where || [];
        let filterParser = new FilterParser(where);
        let aCountryFilters = filterParser.getFilterByProperty("Country");
        let country = aCountryFilters[0]?.value || 'BE';
        let currentUserApi = new Yy1_CurrentUserApi2Api();
        let count = await currentUserApi.requestBuilder()
            .getAll()
            .filter(
                currentUserApi.schema.COUNTRY.equals(country)
            )
            .count()
            .execute(destination);
        let employeeData = await currentUserApi.requestBuilder()
            .getAll()
            .filter(
                currentUserApi.schema.COUNTRY.equals(country)
            )
            .skip(skip)
            .top(top)
            .execute(destination);
        let result = employeeData.map((employee) => {
            return {
                PersonnelNumber: employee.personWorkAgreement,
                PersonFullName: employee.personFullName
            }
        });
        result.$count = count;
        return result;
    });

    /**
     * Get the employee data for superlock
     */
    srv.on("READ", "EmployeeData", async (req) => {
        // Possible filters: YearMonth, Status, Country
        let top = req._queryOptions?.$top || 100;
        let skip = req._queryOptions?.$skip || 0;
        let where = req.query.SELECT.where || [];
        let currentUserApi = new Yy1_CurrentUserApi2Api();
        let availabilityAPI = new Yy1_Wa_AvailabilityApi();
        let filterParser = new FilterParser(where);
        let aCountryFilters = filterParser.getFilterByProperty("Country");
        let country = aCountryFilters[0]?.value || 'BE';
        let aEndDateFilters = filterParser.getFilterByProperty("EndDate");
        let endDate = null;
        if (aEndDateFilters) {
            endDate = new Date(aEndDateFilters[0]?.value);
        } else {
            endDate = new Date();
        }
        let yearMonth = endDate.getFullYear().toString() + (endDate.getMonth() + 1);
        // let aPeronnelNumberFilters = filterParser.getFilterByProperty("PersonnelNumber");
        // let aUnitFilters = filterParser.getFilterByProperty("Unit");
        let aEmployeTypeConditions = filterParser.getFilterByProperty("EmployeeType");
        let aCountryFilterCurrentUser = [];
        aCountryFilters.forEach((country) => {
            aCountryFilterCurrentUser.push(currentUserApi.schema.COUNTRY.equals(country.value));
        });
        let aEmployeeTypeFilters = [];
        aEmployeTypeConditions.forEach((employeeType) => {
            if(employeeType.value !== ''){
                aEmployeeTypeFilters.push(currentUserApi.schema.BUSINESS_PARTNER_ROLE.equals(employeeType.value));
            }
        });
        let count = await currentUserApi.requestBuilder()
            .getAll()
            .filter(
                and(
                    or(...aCountryFilterCurrentUser),
                    or(...aEmployeeTypeFilters)     
                )
            )
            .count()
            .execute(destination);
        let employeeData = await currentUserApi.requestBuilder()
            .getAll()
            .filter(
                and(
                    or(...aCountryFilterCurrentUser),
                    or(...aEmployeeTypeFilters)     
                )
            )
            .skip(skip)
            .top(top)
            .execute(destination);
        let periodFilter = [];
        periodFilter.push(availabilityAPI.schema.YEAR_MONTH.equals(yearMonth));
        let companyFilters = [];
        let aCompanyCodes = companyCode.getCompanyCodeByCountry(country);
        aCompanyCodes.forEach((value) => {
            companyFilters.push(availabilityAPI.schema.COMPANY_CODE.equals(value));
        });
        let employeeFilter = [];
        let availabilityData = [];
        if (parseInt(top) > 100) {
            // request came from the export to Excel. Adding upto 1000 records to the filter, will cause the 
            // request payload to reach the limit and fail. split the request into multiple chunks and collect the data. 
            let newTop = 100;
            let newSkip = 0;
            let i = 0;
            let length = employeeData.length;
            let end = newTop;
            let maxCount = Math.ceil(top / 100);
            while (i < maxCount) {
                if (end > length) {
                    end = length;
                }
                let newEmployeeData = employeeData.slice(newSkip, end);
                employeeFilter = [];
                newEmployeeData.forEach((employee) => {
                    employeeFilter.push(availabilityAPI.schema.PERSON_WORK_AGREEMENT.equals(employee.personWorkAgreement))
                });
                availabilityData.push(await availabilityAPI.requestBuilder()
                    .getAll()
                    .filter(
                        and(
                            or(...employeeFilter),
                            or(...periodFilter),
                            or(...companyFilters)
                        ))
                    .execute(destination));
                newSkip += newTop;
                end += newTop;
                i++;
            }
        } else {
            employeeData.forEach((employee) => {
                employeeFilter.push(availabilityAPI.schema.PERSON_WORK_AGREEMENT.equals(employee.personWorkAgreement))
            });
            availabilityData = await availabilityAPI.requestBuilder()
                .getAll()
                .filter(
                    and(
                        or(...employeeFilter),
                        or(...periodFilter),
                        or(...companyFilters)
                    ))
                .execute(destination);
        }
        let mAvailabilityData = groupBy(availabilityData, 'personWorkAgreement');
        let result = employeeData.map((employee) => {
            let personAvailability = mAvailabilityData[employee.personWorkAgreement] || [];
            let availabilityHours = aggregateBy(personAvailability, 'personWorkAgreement');
            return {
                PersonnelNumber: employee.personWorkAgreement,
                PersonFullName: employee.personFullName,
                PersonExternalID: employee.userId,
                CompanyCode: '9034',
                BusinessPartnerRole: employee.businessPartnerRole,
                BusinessPartnerRoleShortName: '',
                BusinessPartner: employee.businessPartner,
                AvailabilityInHours: "",
                CostCenter: employee.costCenter,
                CostCenterName: '',
                EndDate: employee.endDate,
                Country: "NL",
                LockStatus: "Not Locked",
                Unit: "S",
                Reason: "Not Locked",
                EmployeeType: ( employee.businessPartnerRole === "BUP003" ) ? "Internal" : "External",
                HoursDecimal: availabilityHours
            }
        });
        result.$count = count;
        return result;
    });
}