const addEmployeeController = require("../Controllers/AddEmployee.controller")
const express = require("express")
// import router module
const router = express.Router();
// handle add employee request
router.post("/add-employee", addEmployeeController.addEmployee)

module.exports = router