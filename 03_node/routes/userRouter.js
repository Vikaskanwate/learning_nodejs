const express = require('express');
const router = express.Router();
const {handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser, handleGetAllUsers} =  require('../controllers/user');

// REST API getAll Users
router.get("/",handleGetAllUsers)
router.post("/",handleCreateNewUser);

// get User by id
router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);


module.exports = router;