const jwt = require('jsonwebtoken');

const auth = async (req,res,next)=>{
    try{
        const authHeader = req.headers.authentication;
        if(!authHeader && !(authHeader.startsWith("Bearer "))){
            return res.status(401).json({
                msg:"Unauthorized, no token provided"
            })
        }
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token,"key");
        req.user = decoded;
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({
            error:"Unauthorized, invalid token"
        })
    }
}


