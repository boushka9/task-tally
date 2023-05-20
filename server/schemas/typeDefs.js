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
`;

module.exports = typeDefs;