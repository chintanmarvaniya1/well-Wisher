const AllUser = require("../controllers/getAllUserController");
const sendMail = require("./sendMail");
const cron = require('node-cron');

const sheduleCronJobs = async () =>{
    //const userList = await AllUser();
    const userList = ['chintanmarvaniya2001@gmail.com','servermonk26@gmail.com']
    try {
        cron.schedule('*/10 * * * * *',()=>{
            if(userList){
                userList.forEach(user => {
                    sendMail(user)
                });
            }else{
                console.log("User List is empty");
            }
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = sheduleCronJobs