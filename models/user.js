const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughtBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Thoughts',
    },
    friend:
        { type: mongoose.Schema.Types.ObjectId, ref: 'Friend' }
});

const User = mongoose.model('User', userSchema);

module.exports = User