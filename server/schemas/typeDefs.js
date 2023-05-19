const { gql } = require('apollo-server');

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

    type Query {
        users: [User]
        tasks: [Task]
    }
`