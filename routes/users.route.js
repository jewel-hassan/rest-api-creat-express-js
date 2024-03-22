const express = require("express");
const router = express.Router();
const { getallUsers, createUsers, updateUsers,deleteUser } = require("../controllers/users.controllers");

// USERS ROUTE

router.get("/", getallUsers);
router.post("/", createUsers);
router.put('/:id',updateUsers)
router.delete('/:id',deleteUser)

module.exports = router;
