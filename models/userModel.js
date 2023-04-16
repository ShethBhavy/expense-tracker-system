const mongoose = require('mongoose')

// schema design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is require']
    },
    email: {
        type: String,
        required: [true, 'email is require'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password is require']
    }
}, { timestamps: true }
)

// export
const userModel = mongoose.model('users', userSchema)

module.exports = userModel