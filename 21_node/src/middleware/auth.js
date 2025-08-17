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

const admin = async (req,res,next)=>{
    if(!req.user || !req.user.role){
        return res.status(403).json({
            msg:"Access Denied! No user role found."
        })
    }
    if(req.user.role !== "Admin"){
        return res.status(403).json({
            msg:"Access Denied! Managers only."

        })
    }
    next();
}
