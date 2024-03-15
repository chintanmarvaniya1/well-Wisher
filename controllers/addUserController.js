const USER= require("../models/userModel");

const addUser = async (req, res) => {
    try {
        const { firstname, lastname, email,dob } = req.body;
        if (firstname===undefined || lastname===undefined || email===undefined || dob===undefined) {
            return res.status(400).json({
                success: false,
                message: 'Required fields are not supplied'
            });
        }
        if (await USER.findOne({ email: email })) {
            return res.status(400).json({
                success: false,
                message: 'User Already Exist'
            });
        }
        USER.create({
            firstname:firstname,
            lastname:lastname,
            email:email,
            dob:new Date(dob)
        }).then((success)=>{
            return res.status(200).json({
                success: true,                
                message: 'User created!',
                userID:success.id 
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

module.exports = addUser;