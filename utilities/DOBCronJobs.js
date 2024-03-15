const AllUser = require("../controllers/getAllUserController");
const genrateLogs = require("./logs");
const getTodaysQuote = require("./getTodaysQuote");
const {transporter,DOBMailOption} = require("./sendMail");
const cron = require('node-cron');


const DOBCronJobs = async () =>{
    const userList = await AllUser();
    if(userList.success){
        try {
            users = userList.userList
            for (let i = 0; i < users.length; i++) {                
                if(checkUserDOB(users[i])){
                    runTheCronJobs(users[i])
                }else{
                    genrateLogs(`Today No One has Birthdays`)
                }
                
            }            
        } catch (error) {
            genrateLogsg(`Issue In Running Cron Jobs` +error)
        }
    }else{
        genrateLogs(`Issue in Getting User Data from DB`)
    }
}

function runTheCronJobs(user) {
    cron.schedule('00 09 * * *',()=>{
        var mailOption = DOBMailOption(user)
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
    })
}

function checkUserDOB(user) {
    const todayDate = new Date();
    const todaysMonth = todayDate.getMonth() + 1;
    const todaysDate = todayDate.getDate();

    //console.log("Todays" + todaysDate +" "+todaysMonth)

    const UserDOB = user.dob;
    const userDate = UserDOB.getDate();
    const userMonth = UserDOB.getMonth()+1;
    //console.log("DOB"+userDate+" "+userMonth);

    if (todaysDate === userDate && todaysMonth === userMonth) { 
        return true 
    } else {
        return false;
    }
}

module.exports = DOBCronJobs