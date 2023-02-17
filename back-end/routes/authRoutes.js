

const jsonschema = require("jsonschema");
const User = require('../models/user')
const { createToken } = require("../helpers/tokens");
const newUserSchema = require('../schemas/newUserSchema.json')

const express = require("express");
const router = new express.Router();


router.get('/test', (req, res, next) => {
  return res.send({'test1':'test1'})
})

router.post("/register", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, newUserSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const newUser = await User.register({ ...req.body, isAdmin: false });
    const token = createToken(newUser);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
});



module.exports = router;