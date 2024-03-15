const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


const Quotes = {
    quote: { type: String, required: true, lowercase: true },
    img: { type: String, required: true, lowercase: true }
}
const quoteSchema = new Schema(Quotes)


module.exports = mongoose.model('Quotes', quoteSchema);
