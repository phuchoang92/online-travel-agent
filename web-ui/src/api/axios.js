import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:44322/api/",
    timeout: 5000,
    headers: {
        "Content-type": "application/json"
    }
});

export default instance;
