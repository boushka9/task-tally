const { AuthenticationError } = require('apollo-server-express');
const { User, Task } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {
      //query user
        users: async () => {
          return User.find();
        },
        //query one user
        user: async (parent, { profileId }) => {
          return User.findOne({ _id: userId });
        },
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (parent, args, context) => {
          if (context.user) {
            return User.findOne({ _id: context.user._id });
          }
          throw new AuthenticationError('You need to be logged in!');
        },
        //query tasks
        tasks: async (parent, { username }) => {
          const params = username ? { username } : {};
          return Task.find(params).sort({ createdAt: -1 });
        },
        //query one task
        task: async (parent, { taskId }) => {
          return Task.findOne({ _id: taskId });
        },

        getCheckedToDos: async (parent, args) => {
          const params = {checked: true}
          return Task.find(params);
        },

        // getCheckedToDos: async (parent, { username }) => {
        //   const user = User.findOne({ username: "pedroPascal" });
        //   user.getCheckedToDos();
        //   return user;
        // }
        // User.populateChecked('maverick')
      //TODO getTotalScore unless front end has it:

      //TODO getHighScore id front end doesn't:
    },


//Mutations:

Mutation: {

//login mutation
login: async (parent, { username, password }) => {
  const user = await User.findOne({ username});

  if (!user) {
    throw new AuthenticationError('No user found with this email address');
  }
// debugger
  const correctPw = await user.isCorrectPassword(password);
debugger
  if (!correctPw) {
    throw new AuthenticationError('Incorrect credentials');
  }

  const token = signToken(user);

  return { token, user };
},
// Add user
addUser: async (parent, { username, password }) => {
  const user = await User.create({ username, password });
  const token = signToken(user);
  return { token, user };
},

// Add task 
addTask: async (parent, { scoreValue, body }) => {
  return Task.create({ scoreValue, body });
},
// remove/delete task
removeTask: async (parent, { taskId }) => {
  return Task.findOneAndDelete({ _id: taskId });
},

//TODO:get scores unless front end can do the thing


//find user and populate todos
me: async (parent, args, context) => {
    if (context.user) {
      const user =  User.findOne({ username })
      .select("-__v")
      .populate("toDos")
      return user  
    }
    throw new AuthenticationError('You need to be logged in!');
  }
}};

module.exports = resolvers

//_id: context.user._id