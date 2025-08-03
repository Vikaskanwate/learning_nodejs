const express = require('express');
const {register,login} = require('../controller/userController');
const router = express.Router();

router.post("/",register);
router.post("/",login);