/**
 * The purpose of this class is to parse the filters from the cap request object 
 * and return the filter condition
 */
class FilterParser {

    /**
     * Parser to convert the filter expression from CAP to Cloud SDK format
     * @param {Array} filters - Array of filter expression
     */
    constructor(filters) {
        if(filters.length === 0) {
           return;
        }
        this.filters = filters;
        this.properties = [];
        this.mFilters = {};
        this.loadFilters();
    }

    /**
     * Load the filter to the instance memory
     */
    loadFilters() {
        this.parseFilters(this.filters);
    }

    /**
     * Returns the filters parsed by the property names.
     * @param {String} sProperty - Name of the filter property
     * @returns {Array} Array containing filter conditions
     */
    getFilterByProperty(sProperty) {
        return this.mFilters[sProperty];
    }

    /**
     * Recursive function to parse and load the class instance with the filters from the CDS Request.
     * The property `ref` contains the name of the filter property, the property `xpr`is an array which 
     * contains reference further in its entries that needs to recursed to filters.
     * @param {Array} expressions - Array of filters from cds.Request {req.query.SELECT.where}
     */
    parseFilters(expressions) {
        let length = expressions.length;
        for(let i = 0; i < length; i++ ){
            const currentRef = expressions[i];
            if (currentRef.ref && currentRef.ref[0]) {
                this.properties.push(currentRef.ref[0]);
                if(!this.mFilters[currentRef.ref[0]]){
                    this.mFilters[currentRef.ref[0]] = [];
                }
                let operator = expressions[i+1];
                let expression = expressions[i+2];
                if(expression && expression.val ){
                    this.mFilters[currentRef.ref[0]].push({
                        operator,
                        value: expression.val
                    });
                }   
            } else if (currentRef.xpr && currentRef?.xpr?.length > 0 ) {
                this.parseFilters(currentRef.xpr);
            }
        }
    }
}

module.exports = FilterParser;