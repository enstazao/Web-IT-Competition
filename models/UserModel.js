const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isVetran:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = model('user', userSchema)