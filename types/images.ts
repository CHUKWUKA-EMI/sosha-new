export enum ImageDirectory {
  POSTS = "posts",
  USERS = "users",
}

export type ImageUploadRequest = {
  directory: ImageDirectory;
  filename: string;
  contentType: string;
  postId?: string;
  userId?: string;
  file: File;
};

export type ImageFetchRequest = {
  userId: string;
  postId: string;
  lastImageKey?: string;
};
