import axios from "axios";
const userurl = import.meta.env.VITE_USER_BASE_URL;

import {
  getAccessTokenFromCookie,
  setAccessTokenInCookie,
  getRefreshTokenFromCookie,
  setRefreshTokenInCookie,
} from "./authHelpers";

const userRequest = axios.create({
  baseURL: userurl,
});

const isAccessTokenNearExpiration = () => {
  //functin to check the token expiration and refresh the both token here
};

// Request Interceptor

// userRequest.interceptors.request.use(
//   (config) => {
//     const accessToken = getAccessTokenFromCookie();
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken} manager`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor
// userRequest.interceptors.response.use(
//   async (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Check if authentication error
//     if (error?.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // refresh access token
//         const refreshToken = getRefreshTokenFromCookie();
//         const response = await userRequest.post("/refresh-token-endpoint", {
//           refresh_token: refreshToken,
//         });

//         // Updating token in the cookies
//         setAccessTokenInCookie(response.data.access_token);
//         setRefreshTokenInCookie(response.data.refresh_token);

//         // back to  original request with new access token
//         originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
//         return userRequest(originalRequest);
//       } catch (refreshError) {
//         // when error token refresh
//         console.error("Failed to refresh access token:", refreshError);
//         throw refreshError;
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default userRequest;
