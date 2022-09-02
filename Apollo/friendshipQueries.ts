/* eslint-disable linebreak-style */
import { gql } from "@apollo/client";

export const FOLLOW_USER = gql`
  mutation follow($followerId: String!, $friendId: String!) {
    follow(
      createFollowershipInput: { followerId: $followerId, friendId: $friendId }
    ) {
      friendshipId
      followerId
      friendId
      friendshipStatus
      friend
      blockedBy
      createdAt
      updatedAt
    }
  }
`;

export const GET_CONNECTIONS = gql`
  query myConnections($userId: String!, $start: Int, $count: Int) {
    myConnections(payload: { userId: $userId, start: $start, count: $count }) {
      data {
        friendshipId
        followerId
        friendId
        friendshipStatus
        friend
        blockedBy
        createdAt
        updatedAt
      }
      count
      start
      total
    }
  }
`;

export const GET_MY_FOLLOWERS = gql`
  query myFollowers($userId: String!, $start: Int, $count: Int) {
    myFollowers(payload: { userId: $userId, start: $start, count: $count }) {
      data {
        friendshipId
        followerId
        friendId
        friendshipStatus
        friend
        blockedBy
        createdAt
        updatedAt
      }
      count
      start
      total
    }
  }
`;

export const GET_MY_FOLLOWINGS = gql`
  query myFollowings($userId: String!, $start: Int, $count: Int) {
    myFollowings(payload: { userId: $userId, start: $start, count: $count }) {
      data {
        friendshipId
        followerId
        friendId
        friendshipStatus
        friend
        blockedBy
        createdAt
        updatedAt
      }
      count
      start
      total
    }
  }
`;

export const GET_MY_BLACKLISTED_FRIENDS = gql`
  query myBlacklistedFriends($userId: String!, $start: Int, $count: Int) {
    myBlacklistedFriends(
      payload: { userId: $userId, start: $start, count: $count }
    ) {
      data {
        friendshipId
        followerId
        friendId
        friendshipStatus
        friend
        blockedBy
        createdAt
        updatedAt
      }
      count
      start
      total
    }
  }
`;

export const GET_ONE_CONNECTION = gql`
  query connection($friendshipId: String!, $userId: String!) {
    connection(friendshipId: $friendshipId, userId: $userId) {
      friendshipId
      followerId
      friendId
      friendshipStatus
      friend
      blockedBy
      createdAt
      updatedAt
    }
  }
`;

export const FOLLOWERS_COUNT = gql`
  query followersCount($userId: String!) {
    followersCount(userId: $userId)
  }
`;

export const FOLLOWING_COUNT = gql`
  query followingCount($userId: String!) {
    followingCount(userId: $userId)
  }
`;

export const BLACKLIST_FRIEND = gql`
  mutation blacklistFriend(
    $friendshipId: String!
    $user1Id: String!
    $user2Id: String!
  ) {
    blacklistFriend(
      friendshipId: $friendshipId
      user1Id: $user1Id
      user2Id: $user2Id
    ) {
      friendshipId
      followerId
      friendId
      friendshipStatus
      friend
      blockedBy
      createdAt
      updatedAt
    }
  }
`;

export const WHITELIST_FRIEND = gql`
  mutation whitelistFriend(
    $friendshipId: String!
    $user1Id: String!
    $user2Id: String!
  ) {
    whitelistFriend(
      friendshipId: $friendshipId
      user1Id: $user1Id
      user2Id: $user2Id
    ) {
      friendshipId
      followerId
      friendId
      friendshipStatus
      friend
      blockedBy
      createdAt
      updatedAt
    }
  }
`;

export const NEW_FOLLOWER_SUBSCRIPTION = gql`
  subscription newFollower($friendId: String!) {
    newFollower(friendId: $friendId) {
      friendshipId
      followerId
      friendId
      friendshipStatus
      friend
      blockedBy
      createdAt
      updatedAt
    }
  }
`;
