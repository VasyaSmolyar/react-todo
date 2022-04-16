import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_TODOS, HOST } from "./CONSTANTS";

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


