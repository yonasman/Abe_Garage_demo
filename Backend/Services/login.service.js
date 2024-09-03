const { query} = require("../config/db.config")

async function login(userData) {

    try {
        const email = userData.email;
        const password = userData.password;

        // query
        const sql = `SELECT * FROM employee WHERE email=? AND password=?`
        const result = await query(sql,[email,password])
        if(result) {
            return result
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {login}