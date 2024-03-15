const QUOTE= require("../models/quoteModel");

const addQuote = async (req, res) => {
    try {
        const { quote, img } = req.body;
        if (quote===undefined || img===undefined  ) {
            return res.status(400).json({
                success: false,
                message: 'Required fields are not supplied'
            });
        }
        if (await QUOTE.findOne({ quote: quote })) {
            return res.status(400).json({
                success: false,
                message: 'Quote Already Exist'
            });
        }
        QUOTE.create({
            quote:quote,
            img:img,
        }).then((success)=>{
            return res.status(200).json({
                success: true,                
                message: 'Quote created!',             
            });
        })
        .catch((error)=>{
            return res.status(500).json({
                success: false,               
                message: error.message,
                error: error
            });
        });
    } catch (error) {
        return res.status(500).json({
            success: false,               
            message: error.message,
            error: error
        });
    }
};

module.exports = addQuote;