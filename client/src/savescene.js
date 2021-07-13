import axios from "./config.js";

export default function savescene(room, file) {
  let data = new FormData();
  data.append("scene", file, room + ".png");
  return axios.post("/uploadscene", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
