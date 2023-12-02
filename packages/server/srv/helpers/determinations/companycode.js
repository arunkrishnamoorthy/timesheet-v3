const { CompanyCodeApi } = require('../../lib/API_COMPANYCODE_SRV/CompanyCodeApi');
const { or, and } = require('@sap-cloud-sdk/odata-v2');
const destination = { destinationName: 'S4HC_BTP_DEST' };
class CompanyCode {

    constructor() {
        this.mCompanyCodes = {};
        this.initializeCompanyCode();
    }

    async initializeCompanyCode() {
        let api = new CompanyCodeApi();
        let filters = [];
        filters.push(api.schema.COUNTRY.equals('NL'));
        filters.push(api.schema.COUNTRY.equals('BE'));
        filters.push(api.schema.COUNTRY.equals('LU'));
        let companyCodeResponse = await api.requestBuilder()
                                        .getAll()
                                        .select(api.schema.COUNTRY, api.schema.COMPANY_CODE)
                                        .filter(or(...filters)).execute(destination);
        companyCodeResponse.forEach((row) => {
            if(!this.mCompanyCodes[row.country]){
                this.mCompanyCodes[row.country] = [];
            }
            if(this.mCompanyCodes[row.country].indexOf(row.companyCode) < 0){
                this.mCompanyCodes[row.country].push(row.companyCode);
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
            CompanyCodeFactory.instance = new CompanyCode();
        } 
        return CompanyCodeFactory.instance;
    }
}

module.exports = CompanyCodeFactory;