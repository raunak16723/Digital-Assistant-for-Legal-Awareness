const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
      
    },
    email: {
        type: String,
       
    },
    review:{
        type:String,
    }
}, {
    timestamps: true
})

const reviews = mongoose.model("reviews", ReviewSchema);

module.exports = reviews;