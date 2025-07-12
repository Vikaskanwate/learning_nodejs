const express = require('express');
const verifyToken = require('../middleware/authmiddleware');
const router = express.Router();
const authorizeRoles = require('../middleware/roleMiddleware');
router.get(
    "/admin",
    verifyToken, authorizeRoles("admin"), (req, res) => {
        res.json({
            message: "welcome Admin"
        });
    })

router.get(
    "/manager",
    verifyToken,
    authorizeRoles("manager", "admin"),
    (req, res) => {
        res.json({
            message: "welcome manager"
        });
    })


router.get(
    "/user", 
    verifyToken,
    authorizeRoles("admin","user","manager"), 
    (req, res) => {
        res.json({
            message: "welcome user"
        });
    })

module.exports = router