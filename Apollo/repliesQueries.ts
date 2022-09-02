/* eslint-disable linebreak-style */
import { gql } from "@apollo/client";

export const CREATE_REPLY = gql`
  mutation createReply(
    $userId: String!
    $commentId: String!
    $postId: String!
    $reply: String!
  ) {
    createReply(
      createReplyInput: {
        userId: $userId
        commentId: $commentId
        postId: $postId
        reply: $reply
      }
    ) {
      id
      userId
      user {
        id
        firstName
        lastName
        email
        imgUrl
        headline
        bio
        sex
        username
        lastLogin
      }
      reply
      createdAt
      updatedAt
      commentId
      postId
    }
  }
`;

export const UPDATE_REPLY = gql`
  mutation updateReply($id: String!, $reply: String!, $userId: String!) {
    updateReply(updateReplyInput: { id: $id, reply: $reply, userId: $userId }) {
      id
      userId
      user {
        id
        firstName
        lastName
        email
        imgUrl
        headline
        bio
        sex
        username
        lastLogin
      }
      reply
      createdAt
      updatedAt
      commentId
      postId
    }
  }
`;

export const DELETE_REPLY = gql`
  mutation removeReply($id: String!, $userId: String!) {
    removeReply(id: $id, userId: $userId) {
      id
      userId
      reply
      createdAt
      updatedAt
      commentId
      postId
    }
  }
`;

export const GET_COMMENT_REPLIES = gql`
  query replies(
    $commentId: String!
    $postId: String!
    $start: Int
    $count: Int
  ) {
    replies(
      payload: {
        commentId: $commentId
        postId: $postId
        start: $start
        count: $count
      }
    ) {
      data {
        id
        userId
        user {
          id
          firstName
          lastName
          email
          imgUrl
          headline
          bio
          sex
          username
          lastLogin
        }
        reply
        createdAt
        updatedAt
        commentId
        postId
      }
      postId
      count
      start
      total
    }
  }
`;

export const GET_SINGLE_REPLY = gql`
  query reply($id: String!) {
    reply(id: $id) {
      id
      userId
      user {
        id
        firstName
        lastName
        email
        imgUrl
        headline
        bio
        sex
        username
        lastLogin
      }
      reply
      createdAt
      updatedAt
      commentId
      postId
    }
  }
`;

export const NEW_REPLY_SUBSCRIPTION = gql`
  subscription newReply($commentId: String!, $postId: String!) {
    newReply(commentId: $commentId, postId: $postId) {
      userId
      user {
        id
        firstName
        lastName
        email
        imgUrl
        headline
        bio
        sex
        username
        lastLogin
      }
      reply
      createdAt
      updatedAt
      commentId
      postId
    }
  }
`;
