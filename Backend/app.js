const express = require("express")
const mysql = require("mysql2")
const dotenv = require("dotenv").config()
const cors = require('cors')

const PORT = 2020
// create instance of express 
const app = express()
// allow cors
app.use(cors())
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
// middleware to parse request body
app.use(express.json())
// request handlers
// get request handler
app.get("/", (req,res) => {
    res.send("testing")
})
// adding employee request handler
app.post("/add-employee", (req,res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password
    // database query to insert a user
    const sql = `INSERT INTO employee(first_name, last_name,email,password) VALUES('${first_name}', '${last_name}', '${email}', '${password}')`
    connection.query(sql, (err,fields, results) => {
        if(err) console.log(err);
        console.log("1 record inserted")
    })
    const response = {
        status : "success",
        message : "Employee added successfully"
    }
    res.status(200).json(response)
})
// login request handler
app.post("/login",(req,res) => {
    const email = req.body.email;
    const password = req.body.password
    console.log(req.body)
    // check for the existence of the user on the database
    const sql =`SELECT * FROM employee WHERE email='${email}' AND password='${password}'`;

    
    connection.query(sql,(err,result) => {
        if(err) console.log(err);
        console.log(result)
        // send response to the client depends on the condition
        if(result.length > 0) {
            const response = {
                status :"success",
                message : "Login successful"
            }
            res.status(200).json(response)
        } else {
            const response = {
                status :"UnAuthorized",
                message : "Login successful"
            }
            res.status(401).json(response)
        }
    })
})

// listening to port 2020
app.listen(PORT,() => {
    console.log("Listening to " + PORT)
})