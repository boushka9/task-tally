
const { User, Task } = require("../models");

const resolvers = {

    Query: {
        users: async () => {
          return User.find();
        },
    
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
    },


//Mutations:

Mutation: {

//login mutation

//signup mutation

// Add user

// Add task 

// remove/delete task

//get scores


//find user and populate todos
me: async (parent, args, context) => {
    if (context.user) {
      const user =  User.findOne({ _id: context.user._id })
      .select("-__v")
      .populate("toDos")
      return user  
    }
    throw new AuthenticationError('You need to be logged in!');
  }
}};

