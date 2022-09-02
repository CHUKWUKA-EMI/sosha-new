/* eslint-disable linebreak-style */
import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phone: String!
    $country: String!
    $state: String!
    $birthdate: Date!
    $username: String!
  ) {
    createUser(
      createUserInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        phone: $phone
        country: $country
        state: $state
        birthdate: $birthdate
        username: $username
      }
    ) {
      id
      firstName
      lastName
      email
      phone
      birthdate
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      AccessToken
      ExpiresIn
      TokenType
      RefreshToken
      IdToken
    }
  }
`;

export const GET_USER = gql`
  query {
    user {
      id
      firstName
      lastName
      email
      phone
      createdAt
      imgUrl
      imagekit_fileId
      birthdate
      headline
      bio
      country
      state
      website
      sex
      username
      user_role
      lastLogIn
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateProfile(
    $id: String!
    $firstName: String
    $lastName: String
    $username: String
    $email: String
    $phone: String
    $imgUrl: String
    $imagekit_fileId: String
    $birthdate: Date
    $headline: String
    $bio: String
    $country: String
    $state: String
    $website: String
    $sex: GENDER
  ) {
    updateProfile(
      updateUserInput: {
        id: $id
        firstName: $firstName
        lastName: $lastName
        username: $username
        email: $email
        phone: $phone
        imgUrl: $imgUrl
        imagekit_fileId: $imagekit_fileId
        birthdate: $birthdate
        headline: $headline
        bio: $bio
        country: $country
        state: $state
        website: $website
        sex: $sex
      }
    ) {
      id
      firstName
      lastName
      username
      imgUrl
      imagekit_fileId
      birthdate
      email
      phone
      headline
      bio
      country
      state
      user_role
      lastLogIn
      sex
      website
    }
  }
`;

export const GET_USER_BY_NAME = gql`
  query getUserByName($username: String!, $token: String) {
    getUserByName(username: $username, token: $token) {
      id
      firstName
      lastName
      email
      phone
      createdAt
      imgUrl
      imagekit_fileId
      birthdate
      headline
      bio
      country
      state
      website
      sex
      username
      user_role
      lastLogIn
    }
  }
`;

export const RETRIEVE_USER = gql`
  query retrieveUser($username: String, $email: String, $phone: String) {
    retrieveUser(
      payload: { username: $username, email: $email, phone: $phone }
    ) {
      id
      firstName
      lastName
      email
      phone
      createdAt
      imgUrl
      imagekit_fileId
      birthdate
      headline
      bio
      country
      state
      website
      sex
      username
      user_role
      lastLogIn
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($email: String!) {
    resetPassword(email: $email)
  }
`;

export const CONFIRM_FORGOT_PASSWORD = gql`
  mutation confirmForgotPassword(
    $confirmationCode: String!
    $newPassword: String!
    $email: String!
  ) {
    confirmForgotPassword(
      payload: {
        confirmationCode: $confirmationCode
        newPassword: $newPassword
        email: $email
      }
    )
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword(
    $accessToken: String!
    $previousPassword: String!
    $proposedPassword: String!
  ) {
    changePassword(
      payload: {
        accessToken: $accessToken
        previousPassword: $previousPassword
        proposedPassword: $proposedPassword
      }
    )
  }
`;

export const DELETE_USER = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      firstName
      lastName
      email
      phone
      createdAt
      imgUrl
      imagekit_fileId
      birthdate
      headline
      bio
      country
      state
      website
      sex
      username
      user_role
      lastLogIn
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logout($userId: String!, $refreshToken: String!) {
    logout(userId: $userId, refreshToken: $refreshToken)
  }
`;
