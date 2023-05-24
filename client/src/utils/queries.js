import { gql } from '@apollo/client';

// Aligns w server side 'tasks: [Task]' query
export const QUERY_TASKS = gql`
  query getTasks {
    tasks {
        _id
        createdAt
        scoreValue
        body
        userId
        checked
    }
  }
`;

// Aligns w server side 'user: User' query
export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
      _id
      username
      toDos {
        _id
        createdAt
        scoreValue
        body
        userId
        checked
      }
    }
  }
`;