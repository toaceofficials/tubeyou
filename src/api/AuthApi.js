import axios from "axios";
import userRequest from "../utils/userRequest";

//google registere api
export const performGoogleLogin = async (codeResponse) => {
  try {
    console.log("-----------------------------", codeResponse);
    const res = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${codeResponse.access_token}`,
          Accept: "application/json",
        },
      }
    );

    return res.data; // You can return data to handle in the calling component
  } catch (err) {
    console.log(err);
    throw err; // You can throw an error to handle in the calling component
  }
};

// export const sessionAuth = async () => {
//   try {
//     const res = await userRequest.get(`/auth/presents`);
//     console.log(res);
//     return res;
//   } catch (err) {
//     console.error(err);
//     throw err; // Rethrow the error to be caught by the caller
//   }
// };
