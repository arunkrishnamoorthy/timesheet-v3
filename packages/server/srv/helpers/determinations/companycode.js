/**
 * This utility class for the Company Code, assist handling of the company code required for the query. 
 * The fiori application splits the ui based on the country code. This class abstracts the the information 
 * of the company codes and the UI application operate only by country code. Based on the country code selected
 * in the UI, this singleton class reads and store the information of different company code and supplies the company
 * code data as an when required in the Service handlers. This class is instantiated once during the start of the application
 */
const { CompanyCodeApi } = require('../../lib/API_COMPANYCODE_SRV/CompanyCodeApi');
const { or, and } = require('@sap-cloud-sdk/odata-v2');
const destination = { destinationName: 'S4HC_BTP_DEST' };
class CompanyCode {

    /**
     * Instance constructor to initialize the company codes by country
     */
    constructor() {
        this.mCompanyCodes = {};
        this.initializeCompanyCode();
    }

    /**
     * Initialize company code by country
     */
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