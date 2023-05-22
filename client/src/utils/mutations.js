import { gql } from '@apollo/client';

export const ADD_TASK = gql`
  mutation addTask($title: String!, $body: String!, $scoreValue: Number!) {
    addTask($title: String!, $body: String!, $scoreValue: Number!) {
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



