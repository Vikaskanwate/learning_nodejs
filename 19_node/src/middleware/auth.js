const jwt = require('jsonwebtoken');

exports.auth = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({error:"Unauthorized, no token provided"});
    }
    const token = authHeader.split(" ")[1];
    try{
        const decoded = jwt.verify(token,"key");
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({
            error:"Unauthorized, invalid token"
        })
    }
}


exports.manager = (req,res,next)=>{
    if(req.user || !req.user.role){
        return res.status(403).json({
            msg:"Access Denied! No user role found."
        })
    }

    if(req.user.role !== "manager"){
        return res.status(403).json({
            msg:"Access Denied! Managers only."
        })
    }
    next();
}