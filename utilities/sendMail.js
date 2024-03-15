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

function dailyQuoteMailOption(User,Quote) {
    return {
        from:{
            name: "Well Wisher",
            address: process.env.EMAIL
        },
        to: User.email,
        subject:`Good Morning....!!!! ${User.firstname}`,
        html:`<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">

        <div style="background-color: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; text-align: center;">
          <h2 style="color: #333; ">Daily Inspiration</h2>
          <hr style="border: 1px solid #ccc; margin-bottom: 20px;">
          
          <div style="margin-bottom: 20px;">
            <img src="https://i0.wp.com/onlymyenglish.com/wp-content/uploads/love-good-morning.png?resize=700%2C750&ssl=1" alt="Good Morning" style="max-width: 100%; height: auto; border-radius: 8px;">
          </div>
      
          <h1 style="color: #666;  line-height: 1;">${Quote}</h1>
      
          <p style="color: #666; font-size: 12px; line-height: 1;">Have a wonderful day ahead!</p>
      
        </div>
      
    </body>`
    }
}

function DOBMailOption(User) {
    return {
        from:{
            name: "Well Wisher",
            address: process.env.EMAIL
        },
        to: User.email,
        subject:`Happy Birthday....!!!! ${User.firstname}`,
        html:`<body>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        
          <div style="background-color: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px;">
            <h2 style="color: #333; text-align: center;">Happy Birthday!</h2>
            <hr style="border: 1px solid #ccc; margin-bottom: 20px;">
            
            <div style="text-align: center;">
              <img src="https://www.wishesmsg.com/wp-content/uploads/Happy-Birthday.jpg" alt="Birthday Cake" style="max-width: 100%; height: auto; border-radius: 8px;">
            </div>
        
            <p style="color: #666; font-size: 18px; line-height: 1.6; text-align: center;">
              Wishing you a day filled with love, joy, and laughter! May all your dreams and wishes come true on this special day.
            </p>
        
            <p style="color: #666; font-size: 18px; line-height: 1.6; text-align: center;">
              Have a fantastic birthday celebration!
            </p>
          </div>
        
        </body>
      </body>`
    }
}

module.exports = {transporter,dailyQuoteMailOption,DOBMailOption}