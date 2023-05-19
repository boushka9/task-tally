const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const taskSchema = require('./Task');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
          },
        toDos: [taskSchema],
        //toDO do todones,

        //toDo scores,

        //need virtuals for high scores and total score

    }
);

const User = model('User', userSchema);

module.exports = User;