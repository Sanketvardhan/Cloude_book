const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// Create a user using :POST "/api/auth/". Doesn't require Auth
router.post('/createuser', [
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atlist 5 chars').isLength({ min: 5 }),
],async (req, res) => {
    // if there are errors, return bad request and errors
    const errors = validationResult(req);
    try {
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check weather the user with same email exist?
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error : "Sorry a user with this email alrady exists"})
    }
    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    
    // .then(user=>res.json(user)).catch(err=>{console.log(err)
    // res.json({error:'Please ernter a unique calue for email',message: err.message})});
    res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured")
    }
});

module.exports = router;
