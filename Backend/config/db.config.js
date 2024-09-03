const mysql = require("mysql2/promise")

// db configuration
const dbConfig = {
    connectionLimit : 10,
    user: process.env.DB_USER,
    database : process.env.DB_NAME,
    host: process.env.DB_HOST,
    password : process.env.DB_PASSWORD,
}
// create connection
const pool = mysql.createPool(dbConfig,()=> {
    console.log("connected to db")
} )
// create async function to execute queries
async function query(sql, params) {
    try {
        const [rows] = await pool.execute(sql,params);
        return rows;
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports = {
    query
}