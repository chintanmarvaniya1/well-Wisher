const AllUser = require("../controllers/getAllUserController");
const {transporter,createMailOption} = require("./sendMail");
const cron = require('node-cron');


const sheduleCronJobs = async () =>{
    const userList = await AllUser();
    console.log(userList);
    if(userList.success){
        try {
            users = userList.userList
            cron.schedule('*/10 * * * * *',()=>{
                if(users){
                    users.forEach(user => {
                        var mailOption = createMailOption(user)
                        try {
                            transporter.sendMail(mailOption)
                            console.log("success");
                        } catch (error) {
                            console.log(error);
                        }
                    });
                }else{
                    console.log("User List is empty");
                }
            })
        } catch (error) {
            console.log(error)
        }
    }else{
        console.log("Issue in getting User Data from Database");
    }
}

module.exports = sheduleCronJobs