import axios from "axios";

const token = async () => {
  return await localStorage.getItem("session-token");
};

export default axios.create({
  baseURL: `localhost:3000`,
  headers: { "session-token": localStorage.getItem("token") }
});