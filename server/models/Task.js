const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const taskSchema = new Schema({
    //time created
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    scoreValue: {
        type: Number,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    username: {
        type: Schema.Types.String,
        ref: 'User',
    },
    //to-dos that are done. 
    checked: {
        type: Boolean,
        default: false,
    }
})

//initialize the task model

const Task = model("toDos", taskSchema)

module.exports = Task;