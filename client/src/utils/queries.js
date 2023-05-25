import { gql } from '@apollo/client';

// Aligns w server side 'tasks: [Task]' query
export const QUERY_TASKS = gql`
  query Tasks {
    tasks {
        body
        scoreValue
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
        scoreValue
        body
        userId
        checked
      }
    }
  }
`;