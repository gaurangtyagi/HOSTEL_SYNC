const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const UserSchema = new Schema ({
    email: {
        type: String, 
        required: true
    }, 
    profileImage: {
        type: String
    }, 
    firstName: {
        type: String, 
        required: true
    }, 
    lastName: {
        type: String, 
        required: true
    }, 
    mobile: {
        type: Number, 
        required: true
    }, 
    createdAt: {
        type: Date, 
        default: Date.now()
    }, 
}); 

module.exports = mongoose.model("User", UserSchema); 