const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obj={
        jgk:'fjdk',
        sk:89
    }
    res.json(obj)
})

module.exports=router