const getAuthorization = (req) => {
    return {
        username: req.user.id,
    }
}

const getUserdetails = (req) => {
    const userdetails = {
        username: req.user.id,
    };

    return userdetails;
}

module.exports = {
    getAuthorization,
    getUserdetails
}