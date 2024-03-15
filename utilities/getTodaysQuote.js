const AllQuotes = require("../controllers/getAllQuotesController");



const getTodaysQuote  = async()=>  {
    const quoteList = await AllQuotes();
    if(quoteList.success){
        quotes = quoteList.quoteList;
        index = genraateRandomNumber(quotes.length)
        return quotes[index].quote;
    }
}

function genraateRandomNumber(no) {
    return Math.floor(Math.random() * no);
}

module.exports= getTodaysQuote