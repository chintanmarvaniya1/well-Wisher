const Quotes= require("../models/quoteModel");
const getAllQuotes = async () => {
    try {
        const quoteList = await Quotes.find({}).lean()
        if (!quoteList) {
            return {
                success: true,
                quoteList:quoteList
            };
        }
        return {
            success: true,
            quoteList:quoteList
        };
    } catch (error) {
        return {
            success: false,
            quoteList:null,
            error:error
        };
    }
}

module.exports = getAllQuotes;