const express = require('express');
const router = express.Router();
const User = require('../models/User')

// Create a user using :POST "/api/auth/". Doesnt require Auth
router.post('/',(req,res)=>{

})

module.exports=router