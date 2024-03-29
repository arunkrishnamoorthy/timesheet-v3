/**
 * Private class to serve the user information
 */
class User {

    /**
     * Instantiate the private class and store the user
     * @param {String} email - CDS Request Obect 
     */
    constructor() {
        this.user;
    }

    /**
     * Return the user name of logged in User/Email
     * @returns {UserName} String
     */
    getUserName() {
        return this.user.UserName;
    }

    /**
     * Get the logged in User company Code
     * @returns {CompanyCode} String
     */
    getCompanyCode() {
        return this.user.CompanyCode;
    }

    /**
     * Get the country of the logged in user
     * @returns {Country} String
     */
    getCountry() {
        return this.user.Country;
    }

    /**
     * Get the logged in user's Person Work Agreement number
     * @returns {PersonWorkAgreement} String
     */
    getPersonalWorkAgreement() {
        if(!this.user.PersonWorkAgreement || this.user.PersonWorkAgreement === ''){
            throw new Error('User does not have a personal work agreement assigned');
        }
        return this.user.PersonWorkAgreement;
    }

    /**
     * Get the logged in user cost center
     * @returns {CostCenter} String
     */
    getCostCenter() {
        return this.user.CostCenter;
    }

    /**
     * Validate if the user already exists in the cache.
     * @returns {Boolean} 
     */
    isUserExists() {
        return !this.user;
    }

    /**
     * Set the logged in user details to the cache
     * @param {Object} user - User Details 
     */
    setLoggedInUser(user) {
        this.user = user;
    }
}

class UserFactory {

    /**
     * This is a singleton class and cannot be instantiated
     */
    constructor() {
        throw new Error("Not allowed to instantiate");
    }

    /**
     * Static factory generator class to instantiate the private class, User
     * and manage its instance
     */
    static getInstance() {
        if(!UserFactory.instance){
            UserFactory.instance = new User();
        } 
        return UserFactory.instance;
    }
}

module.exports = UserFactory;