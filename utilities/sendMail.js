const nodemailer = require('nodemailer');


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

function dailyQuoteMailOption(User) {
    return {
        from:{
            name: "Mail",
            address: process.env.EMAIL
        },
        to: User.email,
        subject:`Hello ${User.firstname}`,
        text:`Hello ${User}`
    }
}

module.exports = {transporter,dailyQuoteMailOption}