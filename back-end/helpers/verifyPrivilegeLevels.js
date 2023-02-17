
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../ExpressError");





// insomnia takes:
  // authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RVc2VyMSIsInByaXZpbGVnZUxldmVsIjowLCJpYXQiOjE2NzY2NjgzOTR9.iJO99XVdm_nh8OvW7cShwrIUjI8LzfxuWh5_56_RpVA


//checks token for privilege level in token in header and passes next() if level is high enough
const privilegeLevelZero = async (req, res, next) => {
    const authHeader = req.headers && req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace(/^[Bb]earer /, "").trim();
      verifiedToken = jwt.verify(token, SECRET_KEY)
      if (verifiedToken.privilegeLevel >= 0) {
        return next()
      } else {
        throw new UnauthorizedError()
      }
    } else {
      throw new UnauthorizedError()
    }
}






module.exports = { privilegeLevelZero }