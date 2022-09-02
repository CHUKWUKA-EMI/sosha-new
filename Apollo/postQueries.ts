import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query posts($start: Int, $count: Int) {
    posts(start: $start, count: $count) {
      data {
        id
        content
        imgUrl
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
        videoUrl
        imagekit_fileId
        numberOfLikes
        numberOfComments
        createdAt
        updatedAt
      }
      count
      start
      total
    }
  }
`;

export const GET_USER_POSTS = gql`
  query userPosts($userId: String!, $start: Int, $count: Int) {
    userPosts(userId: $userId, start: $start, limit: $start) {
      data {
        id
        content
        imgUrl
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
        videoUrl
        imagekit_fileId
        numberOfLikes
        numberOfComments
        createdAt
        updatedAt
      }
      count
      start
      total
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query post($id: String!) {
    post(id: $id) {
      id
      content
      imgUrl
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
      videoUrl
      imagekit_fileId
      numberOfLikes
      numberOfComments
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost(
    $content: String
    $imgUrl: String
    $userId: String!
    $imagekit_fileId: String
    $videoUrl: String
  ) {
    createPost(
      createPostInput: {
        content: $content
        imgUrl: $imgUrl
        userId: $userId
        imagekit_fileId: $imagekit_fileId
        videoUrl: $videoUrl
      }
    ) {
      id
      content
      imgUrl
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
      videoUrl
      imagekit_fileId
      numberOfLikes
      numberOfComments
      createdAt
      updatedAt
    }
  }
`;

export const NEW_POST_SUBSCRIPTION = gql`
  subscription newPost {
    newPost {
      id
      content
      imgUrl
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
      videoUrl
      imagekit_fileId
      numberOfLikes
      numberOfComments
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: String!, $userId: String!, $content: String) {
    updatePost(
      updatePostInput: { id: $id, userId: $userId, content: $content }
    ) {
      id
      content
      imgUrl
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
      videoUrl
      imagekit_fileId
      numberOfLikes
      numberOfComments
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: String!, $userId: String!) {
    deletePost(id: $id, userId: $userId) {
      id
      content
    }
  }
`;
