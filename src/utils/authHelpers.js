import Cookies from "js-cookie";
import { useNavigate } from "react-router";

export function logout(navigate) {
  clearTokensFromCookies();
  navigate("/login");
}

/// Helper function for frontent authentication

// adding access token as HttpOnly cookie
export const setAccessTokenInCookie = (accessToken) => {
  document.cookie = `_mat__=${accessToken};`;
  // document.cookie = `access_token=${accessToken}; HttpOnly; Secure; SameSite=None;`;
};

// setting yhe the refresh token as  HttpOnly cookie
export const setRefreshTokenInCookie = (refreshToken) => {
  document.cookie = `_mrt__=${refreshToken};`;
  // document.cookie = `resfresh_token=${refreshToken}; HttpOnly; Secure; SameSite=None;`;
};

// Function to get the access token from the HttpOnly cookie
export const getAccessTokenFromCookie = () => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "_mat__") {
      return value;
    }
  }
  return null;
};

// Function to get the refresh token from the HttpOnly cookie
export const getRefreshTokenFromCookie = () => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "_mrt__") {
      return value;
    }
  }
  return null;
};

// Function to clear both access and refresh tokens from cookies
export const clearCookie = (cookieName) => {
  console.log(cookieName);
  Cookies.remove(cookieName);
};
