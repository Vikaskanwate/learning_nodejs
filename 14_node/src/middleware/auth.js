const jwt = require("jsonwebtoken");

exports.auth = async function (req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).send({ error: "Unauthorized, no token provided" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, "key");
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Internal server error"
        })
    }
}

exports.admin = async function (req, res, next) {
    if (!req.user || !req.user.role) {
        return res.status(403).json({
            msg: "Access Denied! No user role found." 
        });
    }

    if (req.user.role !== "admin") {
        return res.status(403).json({ 
            msg: "Access Denied! Admins only."
        });
    }
    next();
}