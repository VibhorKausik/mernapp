const express = require('express')
const router = express.Router()
const User = require('../models/User')

const { body, validationResult } = require('express-validator'); // imported

router.post("/api/createuser",[
body('email').isEmail(),
body('name').isLength({min:5}),
body('password','incorrect password').isLength({ min: 5 })], 
async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        
         await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location,
         })
        res.json({success:true});
    }
    catch (error) {
        console.log(error);
        res.json({success:false});
    }
    }
)
module.exports = router;