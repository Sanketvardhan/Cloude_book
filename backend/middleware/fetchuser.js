const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'Harryisagoodb$oyee';
fetchuser=(req,res,next)=>{
    // Get the user form the jwt token and add id to req obj
    const token=req.header("auth-token")
    if(!token){
        res.status(401).send({error:"Please authenticate useng a valid token"})
    }
    try {
        const data=jwt.verify(token, JWT_SECRET)
        req.user=data.user
        next() 
    } catch (error) {
        res.status(401).send({error:"Please authenticate useng a valid token"})
    }

}

module.exports=fetchuser;