const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


function createToken(user) {
    console.assert(user.privilegeLevel !== 0,
        "privilegeLevel set to 0");

    let payload = {
        username: user.username,
        isAdmin: user.isAdmin || false,
    };

    return jwt.sign(payload, SECRET_KEY);
}

module.exports = { createToken };