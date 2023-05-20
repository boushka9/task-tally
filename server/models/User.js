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
        toDos: [{
            type: Schema.Types.ObjectId,
            ref: 'Task',
        }],
        
        //toDO completed toDos,

        //toDo scores from completed toDos,

        //need virtuals for high scores and total score

    }
);

const User = model('User', userSchema);

module.exports = User;