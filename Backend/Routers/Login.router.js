// import router
const express = require("express")
// import router module
const router = express.Router()
// import login controller
const loginController = require("../Controllers/Login.controller")


router.post("/login",loginController.login)
// export the module
module.exports = router
