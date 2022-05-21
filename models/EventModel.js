const {model, Schema} = require('mongoose')

const eventSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    domain:{
        type: String,
        required: true
    },
    hobby:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    userID:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
})

module.exports = model('event', eventSchema)