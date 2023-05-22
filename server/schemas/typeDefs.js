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
        scoreValue: Number
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
        addUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addTask(scoreValue: Number!, title: String!, body: String! ): Task
        removeTask(taskId: ID!): Task
      }
`;

module.exports = typeDefs;