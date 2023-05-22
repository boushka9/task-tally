const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        toDos: [Task]
    }

    type Task {
        _id: ID
        scoreValue: Int
        title: String
        body: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        tasks: [Task]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addTask(taskText: String!, taskAuthor: String!): Task
        addComment(
          taskId: ID!
          commentText: String!
          commentAuthor: String!
        ): Task
        removeTask(taskId: ID!): Task
        removeComment(taskId: ID!, commentId: ID!): Task
      }
`;

module.exports = typeDefs;