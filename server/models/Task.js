const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const taskSchema = new Schema({
    //dateCompleted:

    scoreValue: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

module.exports = taskSchema;