// login controller
const loginService = require("../Services/login.service")
async function login(req,res,next) {
    try {
        const user = await loginService.login(req.body)
        if(user) {
            const response = {
                status : 200,
                message : "Login successful"
            }
            res.status(200).json(response)
        } else {
            const response = {
                status : 401,
                message : "UnAuthorized user"
            }
            res.status(200).json(response)
        }
    } catch (error) {
        console.log(error)
    }
    
} 

module.exports = {
    login
}