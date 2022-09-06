export type DateTime = Date | string;

export enum USER_ROLES {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS",
}

export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  createdAt: DateTime;
  imgUrl?: string;
  imagekit_fileId?: string;
  birthdate: Date;
  headline?: string;
  bio?: string;
  country?: string;
  state?: string;
  website?: string;
  sex?: GENDER;
  username: string;
  user_role: USER_ROLES;
  lastLogIn?: Date;
};

export type IUsers = {
  data: IUser[];
  count: number;
  start: number;
  total: number;
};

export type ICreateUserInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  country?: string;
  state?: string;
  birthdate?: Date;
  username: string;
};

export type IUpdateUserInput = {
  id: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  phone?: string;
  imgUrl?: string;
  imagekit_fileId?: string;
  birthdate?: Date;
  headline?: string;
  bio?: string;
  country?: string;
  state?: string;
  website?: string;
  sex?: GENDER;
};

export enum FriendshipStatus {
  FOLLOWED = "FOLLOWED",
  FOLLOWED_BACK = "FOLLOWED_BACK",
  BLACKLISTED = "BLACKLISTED",
}

export type TFriend = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  headline?: string;
  imgUrl?: string;
  createdAt: DateTime;
  sex?: string;
  bio?: String;
  birthdate?: Date;
  country?: string;
  state?: string;
};

export type FriendShip = {
  friendshipId: string;
  followerId: string;
  friendId: string;
  friendshipStatus: FriendshipStatus;
  friend?: Partial<TFriend>;
  blockedBy?: string;
  createdAt?: DateTime;
  updatedAt?: DateTime;
};

export type FriendShips = {
  data: FriendShip[];
  count: number;
  start: number;
  total: number;
};

export type GetFollowersInput = {
  userId: string;
  start?: number;
  count?: number;
};

export type CreateFollowershipInput = {
  followerId: string;
  friendId: string;
};

export type IRetrieveUserPayload = {
  username?: string;
  phone?: string;
  email?: string;
};

export type IPasswordChange = {
  accessToken: string;
  previousPassword: string;
  proposedPassword: string;
};

export type IConfirmForgotPassword = {
  confirmationCode: string;
  newPassword: string;
  email: string;
};
