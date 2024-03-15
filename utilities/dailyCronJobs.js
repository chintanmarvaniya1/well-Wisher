const AllUser = require("../controllers/getAllUserController");
const genrateLogs = require("./logs");
const getTodaysQuote = require("./getTodaysQuote");
const {transporter,dailyQuoteMailOption} = require("./sendMail");
const cron = require('node-cron');


const dailyCronJob = async () =>{
    const userList = await AllUser();
    var quote = await getTodaysQuote();
    if(userList.success){
        try {
            users = userList.userList
            genrateLogs(`Execution of Cron Job started`)
            cron.schedule('00 10 * * *',()=>{
                if(users){
                    users.forEach(user => {
                        var mailOption = dailyQuoteMailOption(user,quote)
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

module.exports = dailyCronJob