const mongoose = require('mongoose');
const dayjs = require('dayjs');
const { ObjectId } = require('bson');

const Reaction = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: new ObjectId
    },
    reaction: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    timestamps: {
        type: Date,
        default: Date.now(),
        get: time => dayjs().format('DD/MM/YYYY')
    },
})

module.exports = Reaction