/* eslint-disable linebreak-style */
import { gql } from "@apollo/client";

export const CREATE_CHAT = gql`
  mutation createChat(
    $receiverId: String!
    $senderId: String!
    $friendshipId: String!
    $message: String
    $imageUrl: String
  ) {
    createChat(
      createChatInput: {
        receiverId: $receiverId
        senderId: $senderId
        friendshipId: $friendshipId
        message: $message
        imageUrl: $imageUrl
      }
    ) {
      id
      senderId
      receiverId
      friendshipId
      message
      imageUrl
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CHAT = gql`
  mutation updateChat($id: Int!, $friendshipId: String!, $message: String!) {
    updateChat(
      updateChatInput: {
        id: $id
        friendshipId: $friendshipId
        message: $message
      }
    ) {
      id
      senderId
      receiverId
      friendshipId
      message
      imageUrl
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_CHAT = gql`
  mutation deleteChat($id: String!, $friendshipId: String!) {
    deleteChat(id: $id, friendshipId: $friendshipId) {
      id
      senderId
      receiverId
      friendshipId
      message
      imageUrl
      createdAt
      updatedAt
    }
  }
`;

export const USER_TYPING = gql`
  mutation userTyping(
    $friendshipId: String!
    $receiverId: String!
    $senderFirstName: String!
    $senderLastName: String!
  ) {
    userIsTyping(
      friendshipId: $friendshipId
      receiverId: $receiverId
      senderFirstName: $senderFirstName
      senderLastName: $senderLastName
    ) {
      friendshipId
      receiverId
      notification
    }
  }
`;

export const GET_CHAT = gql`
  query chat($id: Int!) {
    chat(id: $id) {
      id
      senderId
      receiverId
      friendshipId
      message
      imageUrl
      createdAt
      updatedAt
    }
  }
`;

export const GET_CHATS = gql`
  query chats($friendshipId: String!, $lastkey: String, $count: Int) {
    chats(
      payload: { friendshipId: $friendshipId, lastkey: $lastkey, count: $count }
    ) {
      data {
        id
        senderId
        receiverId
        friendshipId
        message
        imageUrl
        createdAt
        updatedAt
      }
      count
      lastEvaluationKey
    }
  }
`;

export const SEARCH_CHATS = gql`
  query searchChats(
    $friendshipId: String!
    $lastkey: String
    $search: String!
    $count: Int
  ) {
    searchChats(
      payload: {
        friendshipId: $friendshipId
        lastkey: $lastkey
        search: $search
        count: $count
      }
    ) {
      data {
        id
        senderId
        receiverId
        friendshipId
        message
        imageUrl
        createdAt
        updatedAt
      }
      count
      lastEvaluationKey
    }
  }
`;

export const CREATE_THREAD = gql`
  mutation createThread(
    $friendshipId: String!
    $user1Name: String!
    $user1Id: String!
    $user2Name: String!
    $user2Id: String!
    $lastMessage: LastMessageBody!
  ) {
    createThread(
      payload: {
        friendshipId: $friendshipId
        user1Name: $user1Name
        user1Id: $user1Id
        user2Name: $user2Name
        user2Id: $user2Id
        lastMessage: $lastMessage
      }
    ) {
      friendshipId
      user1Name
      user1Id
      user2Name
      user2Id
      friend {
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
      lastMessage {
        text
        sentBy
        read
        friendshipId
      }
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_THREAD = gql`
  mutation updateThread(
    $userId: String!
    $friendshipId: String!
    $lastMessage: LastMessageBody!
  ) {
    updateThread(
      payload: {
        userId: $userId
        friendshipId: $friendshipId
        lastMessage: $lastMessage
      }
    ) {
      friendshipId
      user1Name
      user1Id
      user2Name
      user2Id
      friend {
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
      lastMessage {
        text
        sentBy
        read
        friendshipId
      }
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_THREAD = gql`
  mutation deleteThread($friendshipId: String!) {
    deleteThread(friendshipId: $friendshipId) {
      friendshipId
      user1Name
      user1Id
      user2Name
      user2Id
      friend {
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
      lastMessage {
        text
        sentBy
        read
        friendshipId
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_THREAD = gql`
  query thread($friendshipId: String!) {
    thread(friendshipId: $friendshipId) {
      friendshipId
      user1Name
      user1Id
      user2Name
      user2Id
      friend {
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
      lastMessage {
        text
        sentBy
        read
        friendshipId
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_THREADS = gql`
  query threads($user1Id: String!, $start: Int, $count: Int) {
    threads(payload: { user1Id: $user1Id, start: $start, count: $count }) {
      data {
        data {
          friendshipId
          user1Name
          user1Id
          user2Name
          user2Id
          friend {
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
          lastMessage {
            text
            sentBy
            read
            friendshipId
          }
          createdAt
          updatedAt
        }
        count
        start
        total
      }
    }
  }
`;

export const SEARCH_THREADS = gql`
  query searchThreads(
    $userId: String!
    $searchTerm: String!
    $start: Int
    $count: Int
  ) {
    searchThreads(
      payload: {
        userId: $userId
        searchTerm: $searchTerm
        start: $start
        count: $count
      }
    ) {
      data {
        friendshipId
        user1Name
        user1Id
        user2Name
        user2Id
        friend {
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
        lastMessage {
          text
          sentBy
          read
          friendshipId
        }
        createdAt
        updatedAt
      }
      count
      start
      total
    }
  }
`;

export const NEW_CHAT_SUBSCRIPTION = gql`
  subscription newChat($friendshipId: String!) {
    newChat(friendshipId: $friendshipId) {
      id
      senderId
      receiverId
      friendshipId
      message
      imageUrl
      createdAt
      updatedAt
    }
  }
`;

export const USER_TYPING_SUBSCRIPTION = gql`
  subscription userIsTyping($friendshipId: String!, $receiverId: String!) {
    userIsTyping(friendshipId: $friendshipId, receiverId: $receiverId) {
      friendshipId
      receiverId
      notification
    }
  }
`;

export const LAST_MESSAGE_SUBSCRIPTION = gql`
  subscription lastMessage($friendshipId: String!) {
    lastMessage(friendshipId: $friendshipId) {
      text
      sentBy
      read
      friendshipId
    }
  }
`;
