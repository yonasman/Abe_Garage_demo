const express = require("express")
const router = express.Router()
// import login router
const loginRouter = require("./Login.router")
// import add employee router
const addEmployeeRouter = require("./AddEmployee.router")
// add the routes to middleware chain
router.use(loginRouter)
router.use(addEmployeeRouter)

module.exports = router