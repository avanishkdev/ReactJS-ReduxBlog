import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const getPosts = async () => {
  const response = await axios.get(`${baseURL}/posts`)
  return response;
}

export {getPosts};