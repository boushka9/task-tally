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
        body: String
        checked: Boolean
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        user: User
        users: [User]
        task: Task
        tasks: [Task]
        getCheckedToDos: [Task]
    }

    type Mutation {
        addUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addTask(scoreValue: Int!, body: String!, checked: Boolean ): Task
        updateTask(id: ID!, checked: Boolean!): Task
        removeTask(taskId: ID!): Task
        me:User
      }
`;

module.exports = typeDefs;