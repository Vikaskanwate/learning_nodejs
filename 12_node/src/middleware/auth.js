const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    

    if (!authHeader && !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            error: "unauthorized, no token provided"
        })
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, "key");
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        
        res.status(401).json({
            error: "Unauthorized, invalid token"
        })
    }
}

exports.admin = (req,res,next)=>{
    if(!req.user || !req.user.role){
        return res.status(403).json({
            msg:"Access Denied! No user role found."
        })
    }
    if (req.user.role !== "admin") {
        return res.status(403).send({ msg: "Access Denied! Admins only." });
    }
    next();
}