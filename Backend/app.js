const express = require("express")
const mysql = require("mysql2")
const dotenv = require("dotenv").config()

const PORT = 2020
// create instance of express 
const app = express()
// db config
const dbConfig = {
    connectionLimit : 10,
    user: process.env.DB_USER,
    database : process.env.DB_NAME,
    host: process.env.DB_HOST,
    password : process.env.DB_PASSWORD
}
// create a mysql connection
const connection = mysql.createConnection(dbConfig)
// connect to db
connection.connect( (err) => {
    if(err) console.log(err);
    console.log("Connected to db")
})
// get request handler
app.get("/", (req,res) => {
    res.send("testing")
})

// listening to port 2020
app.listen(PORT,() => {
    console.log("Listening to " + PORT)
})