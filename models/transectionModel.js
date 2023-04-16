const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
    {
        userid: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: [true, "amount is required"],
        },
        type: {
            type: String,
            required: [true, "type is required"],
        },
        category: {
            type: String,
            requires: [true, "cat is required"],
        },
        date: {
            type: Date,
            required: [true, "data is required"],
        },
        refrence: {
            type: String,
        },
        description: {
            type: String,
            
        },
        
    },
    { timestamps: true }
);

const transectionModel = mongoose.model("transections", transectionSchema);
module.exports = transectionModel;