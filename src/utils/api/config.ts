import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me",
  headers: {
    common: {
      "Content-Type": "application/json",
      // Authorization: 'key',
    },
  },
});

export { api };
