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
  query getSingleTask($title: String!) {
    task(title: $String) {
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
query user($username: String!) {
    user(username: $username) {
      _id
      username
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