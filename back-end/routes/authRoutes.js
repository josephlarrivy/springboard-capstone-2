
const jsonschema = require("jsonschema");
const User = require('../models/user')
const { createToken } = require("../helpers/tokens");
const { RequirePrivilegeLevel } = require("../middleware/RequirePrivilegeLevel");
const newUserSchema = require('../schemas/newUserSchema.json')
const userLogInSchema = require('../schemas/userLogInSchema.json')

const express = require("express");
const router = new express.Router();


router.get('/test', RequirePrivilegeLevel.Level(1), (req, res, next) => {
  return res.send({'test1':'test1'})
})

router.post("/register", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, newUserSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const newUser = await User.register({ ...req.body, privilegeLevel: 0 });
    const token = createToken(newUser);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
});

router.post("/login", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userLogInSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }
    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;