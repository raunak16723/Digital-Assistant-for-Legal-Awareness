const jwt = require("jsonwebtoken");


const secretKey = "Raj@123!"

function setUser(user) {
    const payLoad = {
        user: user.name,
        email: user.email,
    }
    return jwt.sign(payLoad, secretKey)
}

function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secretKey);
}

module.exports = {
    setUser,
    getUser
}