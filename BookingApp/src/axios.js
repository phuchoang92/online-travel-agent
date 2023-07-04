import axios from "axios";

const instance = axios.create({
  baseURL: "https://bda2-104-28-222-75.ngrok-free.app/api/",
  timeout: 5000,
});

export default instance;
