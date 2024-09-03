const express = require("express")
require("dotenv").config()
const cors = require('cors')
const PORT = process.env.PORT
// create instance of express 
const app = express()
// allow cors
app.use(cors())
// middleware to parse request body
app.use(express.json())
// add routes to middleware chain
const routers = require("./Routers")
app.use(routers)
// request handlers
// get request handler
app.get("/", (req,res) => {
    res.send("testing")
})

// listening to port 2020
app.listen(PORT,() => {
    console.log("Listening to " + PORT)
})