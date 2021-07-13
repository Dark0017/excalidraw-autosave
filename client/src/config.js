import axios from "axios";

const http = axios.create({
  baseURL: `http://localhost:${process.env.PORT ? process.env.PORT : 8000}`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accepts: "application/json",
  },
});

export default http;
