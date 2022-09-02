/* eslint-disable linebreak-style */
import axios, { AxiosError } from "axios";
import { ImageFetchRequest, ImageUploadRequest } from "../types/images";

const imagesBaseUrl = process.env.IMAGES_ENDPOINT!;

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const errorObj = error.response;
    return Promise.reject(errorObj);
  }
);

const uploadToS3 = async (formData: any, file: File) => {
  const url = formData.url;
  const fields = formData.fields;
  const payload = new FormData();
  Object.keys(fields).forEach((key) => {
    payload.append(key, fields[key]);
  });
  payload.append("file", file);
  payload.append("fileName", file.name);

  let progress = 0;
  try {
    const response = await axiosInstance.post(url, payload, {
      headers: {
        "Accept-Encoding": "gzip,deflate,br",
      },
      onUploadProgress: (event: ProgressEvent) => {
        progress = Math.floor(event.loaded / event.total) * 100;
      },
      baseURL: undefined,
    });
    return {
      status: response.status,
      data: response.data,
      progress,
      error: undefined,
    };
  } catch (error: any) {
    return {
      status: error?.status,
      data: undefined,
      error: error?.data?.error,
    };
  }
};

export const startUpload = async ({
  directory,
  filename,
  contentType,
  postId,
  userId,
  file,
}: ImageUploadRequest) => {
  const payload = { directory, filename, contentType, postId, userId };
  const response = await axiosInstance.post(imagesBaseUrl, payload);
  return await uploadToS3(response.data.formData, file);
};

export const getPostImages = async ({
  userId,
  postId,
  lastImageKey,
}: ImageFetchRequest) => {
  try {
    const response = await axiosInstance.get(
      `${imagesBaseUrl}/user/posts?userId=${userId}&postId=${postId}&lastImageKey=${lastImageKey}`
    );
    return {
      status: response.status,
      data: response.data,
      error: undefined,
    };
  } catch (error: any) {
    return {
      status: error?.status,
      data: undefined,
      error: error?.data?.error,
    };
  }
};

// export const uploadToImageKit = async (image) => {
//   const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;
//   const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
//   const authenticationEndpoint = process.env.BACKEND_URL + "imagekitAuth";

//   const formData = new FormData();
//   formData.append("file", image);
//   formData.append("fileName", image.name);
//   formData.append("publicKey", publicKey);
//   formData.append("folder", "/social_media_posts");
//   try {
//     const authenticate = await axios.get(authenticationEndpoint);

//     if (authenticate.status === 200) {
//       formData.append("token", authenticate.data.token);
//       formData.append("expire", authenticate.data.expire);
//       formData.append("signature", authenticate.data.signature);
//       try {
//         const response = await axios.post(
//           "https://upload.imagekit.io/api/v1/files/upload",
//           formData
//         );
//         return response;
//       } catch (error) {
//         return error.message;
//       }
//     }
//   } catch (error) {
//     return error.message;
//   }
// };
