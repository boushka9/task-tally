import { gql } from '@apollo/client';

export const QUERY_TASKS = gql`
  query getTasks {
    tasks {
        _id
        createdAt
        scoreValue
        title
        body
        userId
        checked
    }
  }
`;

export const QUERY_SINGLE_TASK = gql`
  query getSingleTask($taskId: ID!) {
    task(TaskId: $taskId) {
        _id
        createdAt
        scoreValue
        title
        body
        userId
        checked
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      password
      toDos {
        _id
        createdAt
        scoreValue
        title
        body
        userId
        checked
      }
    }
  }
`;