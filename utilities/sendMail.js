const nodemailer = require('nodemailer');

const sendDailyMail = async (User) =>{
    try {
        const transporter = nodemailer.createTransport({
            service:'gmail',
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS
            }
        })
        const dailyMailOption = (User) = {
            from:{
                name: "Mail",
                address: process.env.EMAIL
            },
            to: User,
            subject:`Hello ${User}`,
            text:`Hello ${User}`
        }

        transporter.sendMail(dailyMailOption)
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendDailyMail