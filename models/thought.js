const mongoose = require('mongoose');
const Reaction = require('./Reaction')
const dayjs = require('dayjs')

const ThoughtSchema = new mongoose.Schema({
    thought: {
        type: String,
        min: 1,
        max: 128,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now(),
        get: time => dayjs().format('DD/MM/YYYY')
    },
    username: {
        type: String
    },
    reaction: [Reaction]
});


const Thought = mongoose.model('Thought', ThoughtSchema);


module.exports = Thought