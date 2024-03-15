const mongoose = require('mongoose')


const connectDB =()=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(`${process.env.MONGODB_CONNECT_URI}/${process.env.DATA_BASE}`)
        console.log(`🔥 DATABASE Connected Successfully !!!`)
        return resolve();
    }).catch((error)=>{
        console.log(`🚫 Error → : ${error.message}` )
        process.exit(1)
    })
} 

module.exports = connectDB