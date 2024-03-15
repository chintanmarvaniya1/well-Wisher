const AllUser = require("../controllers/getAllUserController");
const genrateLogs = require("./logs");
const {transporter,dailyQuoteMailOption} = require("./sendMail");
const cron = require('node-cron');


const sheduleCronJobs = async () =>{
    const userList = await AllUser();
    console.log(userList);
    if(userList.success){
        try {
            users = userList.userList
            genrateLogs(`Execution of Cron Job started`)
            cron.schedule('*/10 * * * * *',()=>{
                if(users){
                    users.forEach(user => {
                        var mailOption = dailyQuoteMailOption(user)
                        try {
                            transporter.sendMail(mailOption,(error,info)=>{
                                if(error){
                                    genrateLogs(`Error in sending Eamil to ${user.email } : ${error} `)                
                                }else{
                                    genrateLogs(`Message Details for ${user.email} : ${info.response} `)
                                }
                            })
                        } catch (error) {
                            genrateLogs(`Error in sending Eamil : ${error}`)
                        }
                    });
                }else{
                    genrateLogs(`No User Present in DB.}`)
                }
            })
        } catch (error) {
            genrateLogs(`Issue In Running Cron Jobs`)
        }
    }else{
        genrateLogs(`Issue in Getting User Data from DB`)
    }
}

module.exports = sheduleCronJobs