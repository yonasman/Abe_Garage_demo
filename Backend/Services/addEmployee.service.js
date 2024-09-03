const {query} = require("../config/db.config")

async function addEmployee(employeeData) {
    try {
        const firstName = employeeData.first_name
        const lastName = employeeData.last_name
        const email = employeeData.email
        const password = employeeData.password
        // query
        const sql = "INSERT INTO employee(first_name, last_name, email, password) VALUES(?,?,?,?)";
        const result = await query(sql,[firstName,lastName,email,password])
        if(result.insertId) {
            const insertId = result.insertId
            return insertId
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    addEmployee
}