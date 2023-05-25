const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const { match } = require('assert');

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
            ref: "toDos",
        }],
        highScore: [{
            //array of checked score values for user
        }]
        


        //need virtuals for high scores and total score

    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

//virtual to seperate to-dos from to-dos that have been checked as done
userSchema.virtual("checkedToDos", {
    ref: 'toDos',
    localField: '_id',
    foreignField: 'username',
    justOne: false,
    match: { checked: true }
});

userSchema.methods.populateChecked = function(username) {
    return this.username.populate("checkedToDos")
     .exec();
 }

 userSchema.methods.calculateTotalScore = function(username) {
    return this.username.populate({
                path: 'checkedToDos',
                select: 'scoreValue',
              })
              .exec()
              .then((user) => {
                //the map function iterates over the scores from the array of checkedToDos
                //the reduce function tallies the accumulated values
                const checkedToDos = user.checkedToDos;
                const totalScore = checkedToDos
                  .map((todo) => todo.scoreValue)
                  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                return totalScore;
              });

   
              
 } 
 userSchema.methods.isCorrectPassword = async function (password) {
            
                // return bcrypt.compare(password, this.password);
                return password === this.password;
              };


const User = model('User', userSchema);

module.exports = User; 
    //populates the completed toDos
// populateChecked: (username) => {
//    return User.findById(username).populate("checkedToDos")
//     .exec();
// },
    //calculates the total score based on the point value provided in Task.js
// calculateTotalScore: (username) => {
//     return User.findById(username)
//       .populate({
//         path: 'checkedToDos',
//         select: 'scoreValue',
//       })
//       .exec()
//       .then((user) => {
//         //the map function iterates over the scores from the array of checkedToDos
//         //the reduce function tallies the accumulated values
//         const checkedToDos = user.checkedToDos;
//         const totalScore = checkedToDos
//           .map((todo) => todo.scoreValue)
//           .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//         return totalScore;
//       });
//   },


//now exported: User, populateChecked, and calculateTotalScore