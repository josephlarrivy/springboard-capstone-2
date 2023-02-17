
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const db = require('../db')

const { ExpressError,NotFoundError,UnauthorizedError,BadRequestError,ForbiddenError } = require('../ExpressError')




class User {

  static async register(
    { username, password, firstName, lastName, email }) {


    const duplicateCheck = await db.query(
      `SELECT username
           FROM users
           WHERE username = $1`,
      [username],
    );
    if (duplicateCheck.rows[0]) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }


    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO users
           (username,
            password,
            first_name,
            last_name,
            email,
            privilegeLevel)
           VALUES ($1, $2, $3, $4, $5, $6)
           RETURNING username, first_name AS "firstName", last_name AS "lastName", email, privilegeLevel AS "privilegeLevel"`,
      [
        username,
        hashedPassword,
        firstName,
        lastName,
        email,
        0,
      ],
    );

    const user = result.rows[0];

    console.log(user)
    return user;
  }
}

module.exports = User;