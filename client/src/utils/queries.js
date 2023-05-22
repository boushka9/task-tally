import { gql } from '@apollo/client';

export const QUERY_TASKS = gql`
  query getTasks {
    tasks {
      _id
      title
      body
      createdAt
      userId
      checked
    }
  }
`;

export const QUERY_SINGLE_TASK = gql`
  query getSingleTask($taskId: ID!) {
    task(TaskId: $taskId) {
        _id
        title
        body
        createdAt
        userId
        checked
    }
  }
`;