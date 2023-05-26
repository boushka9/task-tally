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
  mutation addTask($body: String!, $scoreValue: Int!) {
    addTask(body: $body, scoreValue: $scoreValue) {
      _id
      scoreValue
      body
      checked
    }
  }
`;

// Update the task from checked:false to checked: true on click
export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $checked: Boolean!) {
    updateTask(id: $id, checked: $checked) {
      _id
      body
      scoreValue
      checked
    }
  }
`;


//Remove task by ID
export const REMOVE_TASK= gql`
  mutation RemoveTask($taskId: ID!) {
    removeTask(taskId: $taskId) {
        _id
        scoreValue
        body
        checked
    }
  }
`;
