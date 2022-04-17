import { HOST } from "./CONSTANTS";
import axios from "axios";

const instance = axios.create({
  baseURL: HOST
});

export default instance;