const USER= require("../models/userModel");
const getAllUser = async () => {
    try {
        const userList = await USER.find({}).lean()
        if (!userList) {
            return {
                success: true,
                userList:userList
            };
        }
        return {
            success: true,
            userList:userList
        };
    } catch (error) {
        return {
            success: false,
            userList:null,
            error:error
        };
    }
}

module.exports = getAllUser;