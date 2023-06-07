//const BASE_URL = 'https://www.gervetusa.com/api/';
//const BASE_URL = "https://dev.gervetusa.com/api/";
//const IMAGE_BASE_URL = "https://dev.gervetusa.com/";
const BASE_URL = "http://127.0.0.1:8000/api/";
const IMAGE_BASE_URL = "http://127.0.0.1:8000/";

import { AsyncStorage } from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});
// ---------------------------

const getHomeData = async () => {
  let result = await instance.get(`home`);
  return result.data;
};

export { getHomeData, BASE_URL, IMAGE_BASE_URL };
