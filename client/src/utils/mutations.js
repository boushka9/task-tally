import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token 
            user {
                username
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!) {
        addUser(username: $username, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

// THIS MIGHT BE AN UPDATE OP INSTEAD OF A CREATE
export const ADD_TASK = gql`
  mutation addTask($title: String!, $body: String!, $scoreValue: Number!) {
    addTask(title: $String, body: $String, scoreValue: $Number) {
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

//Remove task by ID
export const REMOVE_TASK= gql`
  mutation RemoveTask($taskId: ID!) {
    removeTask(taskId: $taskId) {
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
