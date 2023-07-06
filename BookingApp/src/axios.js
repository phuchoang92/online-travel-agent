import axios from "axios";

const instance = axios.create({
  baseURL: "https://745d-2a09-bac5-d459-16dc-00-247-f.ngrok-free.app/api/",
  timeout: 5000,
});

export default instance;
