const express = require('express');
const router  = express.Router();

const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

router.get("/",getAllUsers)
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.post("/", createUser);

module.exports = router