import { gql } from '@apollo/client';

// Aligns w server side 'tasks: [Task]' query
export const QUERY_TASKS = gql`
  query Tasks {
    tasks {
        _id
        body
        scoreValue
        checked
    }
  }
`;

export const QUERY_SCORES = gql`
query Tasks {
  tasks {
    checked
    scoreValue
  }
}
`

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