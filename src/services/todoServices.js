import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_TODOS, POST_TASK ,HOST } from "./CONSTANTS";

const instance = axios.create({
  baseURL: HOST
});

export const getTodosQuery = (page = 1) => {
  return new Promise((resolve, reject) => {
    try {
      instance
      .get(GET_TODOS(page))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject("Error in getTodos axios!");
      });
    } catch (error) {
      console.error("in todoServices > getTodos, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

export const postTaskQuery = ({
  username,
  email,
  text
}) => {
  return new Promise((resolve, reject) => {
    try {
      instance
      .post(POST_TASK(), {
        username: username,
        email: email,
        text: text
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject("Error in postTask axios!");
      });
    } catch (error) {
      console.error("in todoServices > postTask, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
}
