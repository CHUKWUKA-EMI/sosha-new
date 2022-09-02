/* eslint-disable linebreak-style */
import { gql } from "@apollo/client";

export const ADD_REACTION = gql`
  mutation addReaction(
    $postId: String!
    $userId: String!
    $reactionType: ReactionType!
  ) {
    addReaction(
      createReactionInput: {
        postId: $postId
        userId: $userId
        reactionType: $reactionType
      }
    ) {
      id
      reactionType
      postId
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
      createdAt
    }
  }
`;

export const GET_POST_REACTIONS = gql`
  query postReactions($postId: String!, $start: Int, $count: Int) {
    postReactions(
      paginationPayload: { postId: $postId, start: $start, count: $count }
    ) {
      data {
        id
        reactionType
        postId
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
        createdAt
      }
      postId
      count
      start
      total
    }
  }
`;

export const NEW_REACTION_SUBSCRIPTION = gql`
  subscription newReaction($postId: String!) {
    newReaction(postId: $postId) {
      id
      reactionType
      postId
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
      createdAt
    }
  }
`;
