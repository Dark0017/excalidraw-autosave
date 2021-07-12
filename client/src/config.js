import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:8000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accepts: "application/json",
  },
});

export default http;
