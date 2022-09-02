/* eslint-disable linebreak-style */
import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment(
    $postId: String!
    $comment: String!
    $userId: String!
  ) {
    createComment(
      createCommentInput: {
        postId: $postId
        comment: $comment
        userId: $userId
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
      comment
      createdAt
      updatedAt
      postId
      numberOfReplies
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query comments($postId: String!, $start: Int, $count: Int) {
    comments(postId: $postId, start: $start, count: $count) {
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
        comment
        createdAt
        updatedAt
        postId
        numberOfReplies
      }
      postId
      count
      start
      total
    }
  }
`;

export const GET_SINGLE_COMMENT = gql`
  query comment($id: String!) {
    comment(id: $id) {
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
      comment
      createdAt
      updatedAt
      postId
      numberOfReplies
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($id: String!, $comment: String!, $userId: String!) {
    updateComment(
      updateCommentInput: { id: $id, comment: $comment, userId: $userId }
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
      comment
      createdAt
      updatedAt
      postId
      numberOfReplies
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: String!, $userId: String!) {
    deleteComment(id: $id, userId: $userId) {
      id
      comment
      createdAt
      updatedAt
      postId
      numberOfReplies
    }
  }
`;

export const NEW_COMMENT_SUBSCRIPTION = gql`
  subscription newComment($postId: String!) {
    newComment(postId: $postId) {
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
      comment
      createdAt
      updatedAt
      postId
      numberOfReplies
    }
  }
`;
