const AllUser = require("../controllers/getAllUserController");

const sheduleCronJobs = async () =>{
    const userList = await AllUser();
    console.log(userList)
}

module.exports = sheduleCronJobs