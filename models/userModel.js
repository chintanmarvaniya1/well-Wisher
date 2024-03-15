const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


const USER = {
    firstname: { type: String, required: true, lowercase: true },
    lastname: { type: String, required: true, lowercase: true },
    email: {type: String,unique: true,lowercase: true,trim: true,required: true}
}
const userSchema = new Schema(USER)


module.exports = mongoose.model('USER', userSchema);
