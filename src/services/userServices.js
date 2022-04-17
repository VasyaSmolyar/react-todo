import { SYSTEM_ERROR } from "../config/CONSTANTS";
import { POST_LOGIN } from "./CONSTANTS";
import instance from "./instance";

export const postLoginQuery = ({
  email,
  password
}) => {
  return new Promise((resolve, reject) => {
    try {
      instance
      .post(POST_LOGIN(), {
        email: email,
        password: password
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject("Error in userServices axios!");
      });
    } catch (error) {
      console.error("in userServices > postLogin, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
}