const addEmployeeService = require("../Services/addEmployee.service")

async function addEmployee(req,res,next) {
    try {
        const employee = await addEmployeeService.addEmployee(req.body);
        console.log(employee)
        if(employee) {
            const response = {
                status : 200,
                message : "Employee added successfully"
            }
            res.status(200).json(response)
        } else {
            const response = {
                status : 404,
                message : "Error on adding Employee"
            }
            res.status(404).json(response)
        }
    } catch (error) {
        console.log(error)
    }

}
module.exports = {addEmployee}