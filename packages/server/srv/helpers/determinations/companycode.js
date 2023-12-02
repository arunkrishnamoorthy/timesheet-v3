const { CompanyCodeApi } = require('../../lib/API_COMPANYCODE_SRV/CompanyCodeApi');
const { or, and } = require('@sap-cloud-sdk/odata-v2');

class CompanyCode {

    constructor() {
        this.mCompanyCodes = {};
        this.initializeCompanyCode();
    }

    async initializeCompanyCode() {
        let api = new CompanyCodeApi();
        let filters = [];
        filters.push(CompanyCodeApi.schema.COUNTRY.equals('NL'));
        filters.push(CompanyCodeApi.schema.COUNTRY.equals('BE'));
        filters.push(CompanyCodeApi.schema.COUNTRY.equals('LU'));
        let companyCodeResponse = await availabilityAPI.requestBuilder()
                                        .getAll()
                                        .select(CompanyCodeApi.schema.COUNTRY, CompanyCodeApi.schema.COMPANY_CODE)
                                        .filter(...filters).execute(destination);
        companyCodeResponse.forEach((row) => {
            if(!this.mCompanyCodes[row.COUNTRY]){
                this.mCompanyCodes[row.COUNTRY] = [];
            }
            if(this.mCompanyCodes[row.COUNTRY].includes(row.COMPANY_CODE) < 0){
                this.mCompanyCodes[row.COUNTRY].push(row.COMPANY_CODE);
            }
        });
    }

    getCompanyCodeByCountry(sCountry){
        return this.mCompanyCodes[sCountry];
    }
}

class CompanyCodeFactory {
    constructor() {
        throw new Error('Instantiation of this class is not allowed');
    }

    static getInstance() {
        if(!CompanyCodeFactory.instance) {
            CompanyCodeFactory = new CompanyCode();
        } 
        return CompanyCodeFactory.instance;
    }
}

module.exports = CompanyCodeFactory;