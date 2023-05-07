import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    common: {
      "Content-Type": "application/json",
      // Authorization: 'key',
    },
  },
});

export { api };
